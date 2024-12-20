'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function YogaPage() {
    const { t } = useTranslation();

    const instructions = [
        t('instruction_one_yoga'),
        t('instruction_two_yoga'),
        t('instruction_three_yoga'),
        t('instruction_four_yoga'),
        t('instruction_five_yoga'),
        t('instruction_six_yoga'),
    ];

    const images = [
        "https://static.vecteezy.com/system/resources/previews/004/305/970/non_2x/balasana-flat-illustration-child-s-pose-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-physical-exercise-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/004/305/984/non_2x/downward-facing-dog-flat-illustration-adho-mukha-shvanasana-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://media.istockphoto.com/id/1399323597/vector/the-girl-performs-the-pose-of-a-warrior-spiritual-and-physical-health-flat-vector.jpg?s=612x612&w=0&k=20&c=Q3i-Vv56JCTTdw-o4M1_gwrUmeiUKzTFJ6W1swdrub8=",
        "https://static.vecteezy.com/system/resources/previews/004/305/968/non_2x/trikonasana-flat-illustration-triangle-pose-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-physical-exercise-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://img.freepik.com/vector-premium/ilustracion-diseno-plano-pose-loto_151150-4203.jpg?w=360",
        "https://media.istockphoto.com/id/1357391833/es/vector/pose-de-cadáver-prasarita-balasana-hermosa-práctica-de-chica-savasana.jpg?s=612x612&w=0&k=20&c=fxAlswd3RPaRVadcHhoyYVahVOFBA3xfGfKG5Rc7CVA="
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [meditationStarted, setMeditationStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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
                stopMeditation();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startMeditation = () => {
        setIsRunning(true);
        setIsPaused(false);
        setTimeLeft(60);
        setMeditationStarted(true);
    };

    const pauseMeditation = () => {
        setIsRunning(false);
        setIsPaused(true);
    };

    const continueMeditation = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const stopMeditation = () => {
        setIsRunning(false);
        setCurrentInstructionIndex(0);
        setTimeLeft(60);
        setMeditationStarted(false);
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
            stopMeditation();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
            <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('guided_yoga')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    {t('intoguided_yoga')}
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                <h3 suppressHydrationWarning={true} className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2 mb-5">
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('duration')}</strong> {t('spend_least')}</li>
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('environment')}</strong> {t('create_quiet')}</li>
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('connection')}</strong> {t('keep_breating')}</li>
                    </ul>

                    {meditationStarted ? (
                        <>
                            <h3  suppressHydrationWarning={true}className="text-xl font-bold text-green-600 mb-2 text-center">{t('current_position')}</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img
                                src={images[currentInstructionIndex]}
                                alt={`Instrucción ${currentInstructionIndex + 1}`}
                                className="w-100 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3 
                            suppressHydrationWarning={true} className="text-xl font-bold text-blue-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p 
                            suppressHydrationWarning={true} className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button
                                suppressHydrationWarning={true} 
                                    onClick={pauseMeditation}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button
                                suppressHydrationWarning={true} 
                                    onClick={stopMeditation}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                                >
                                   {t('stop')}
                                </button>
                                <button
                                suppressHydrationWarning={true} 
                                    onClick={nextInstruction}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                >
                                   {t('next')}
                                </button>
                                {isPaused && (
                                    <button
                                    suppressHydrationWarning={true} 
                                        onClick={continueMeditation}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        {t('continue')}
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button
                        suppressHydrationWarning={true} 
                            onClick={startMeditation}
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
