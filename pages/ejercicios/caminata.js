'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function NatureWalkPage() {
    const { t } = useTranslation();

    const instructions = [
        t('instruction_one_walk'),
        t('instruction_two_walk'),
        t('instruction_three_walk'),
        t('instruction_four_walk'),
        t('instruction_five_walk'),
        t('instruction_six_walk'),
    ];

    const images = [
        "https://www.example.com/nature-walk1.jpg", 
        "https://www.example.com/nature-walk2.jpg", 
        "https://www.example.com/nature-walk3.jpg"
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [walkStarted, setWalkStarted] = useState(false); // Estado de inicio de caminata
    const [isPaused, setIsPaused] = useState(false); // Estado de pausa

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            if (currentInstructionIndex < instructions.length - 1) {
                setCurrentInstructionIndex((prevIndex) => prevIndex + 1);
                setTimeLeft(60); 
            } else {
                stopWalk();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startWalk = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setWalkStarted(true); 
    };

    const pauseWalk = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueWalk = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopWalk = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setWalkStarted(false); 
        setIsPaused(false); 
    };

    const nextInstruction = () => {
        if (currentInstructionIndex < instructions.length - 1) {
            setCurrentInstructionIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % instructions.length;
                setTimeLeft(60);
                return nextIndex;
            });
        } else {
            stopWalk(); 
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="flex-grow pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('walk')}
                </h1>
                <p  suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    {t('introwalk')}
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 suppressHydrationWarning={true} className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong suppressHydrationWarning={true}>{t('duration')}</strong> Comienza con una caminata de 10 a 20 minutos y aumenta gradualmente.</li>
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('comfort')}</strong> {t('useclothes')}</li>
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('attetionp')}</strong> {t('giveyour')}</li>
                    </ul>

                    <h2 suppressHydrationWarning={true} className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">{t('excercisewalk')}</h2>
                    
                    {walkStarted ? (
                        <>
                            <h3  suppressHydrationWarning={true}className="text-xl font-bold text-green-600 mb-2 text-center">{t('current')}</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img 
                                src={images[currentInstructionIndex]} 
                                alt={`Instrucción ${currentInstructionIndex + 1}`} 
                                className="w-80 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3  suppressHydrationWarning={true}className="text-xl font-bold text-green-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p suppressHydrationWarning={true}className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button suppressHydrationWarning={true} 
                                    onClick={pauseWalk} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button suppressHydrationWarning={true}
                                    onClick={stopWalk} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                                >
                                    {t('stop')}
                                </button>
                                <button  suppressHydrationWarning={true}
                                    onClick={nextInstruction} 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                >
                                    {t('next')}
                                </button>
                                {isPaused && (
                                    <button suppressHydrationWarning={true} 
                                        onClick={continueWalk} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        {t('continue')}
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button suppressHydrationWarning={true}
                            onClick={startWalk} 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        >
                            {t('start')}
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
