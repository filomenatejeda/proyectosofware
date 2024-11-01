import React, { useState, useEffect } from 'react';
import { useEmojiContext } from '../context/EmojiContext';
import EmojiIcons, { emojis } from '../components/MoodSelector'; // Importa los emojis
import Calendar from 'react-calendar';
import { format } from 'date-fns-tz';
import 'react-calendar/dist/Calendar.css';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';

const CalendarPage = () => {
    const { emojiData, addEmoji, removeEmoji } = useEmojiContext();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    useEffect(() => {
        const today = new Date();
        const todayString = format(today, 'yyyy-MM-dd', { timeZone: 'America/Santiago' });

        // Establece la fecha actual
        setSelectedDate(today);

        // Intenta recuperar el emoji guardado
        const savedEmoji = localStorage.getItem('selectedEmoji');
        if (savedEmoji) {
            setSelectedEmoji(JSON.parse(savedEmoji));
        }

        // Si no hay emoji para hoy, lo añade
        if (!emojiData[todayString]) {
            addEmoji(todayString, selectedEmoji);
        }
    }, []);

    const handleDateChange = (date) => {
        const dateString = format(date, 'yyyy-MM-dd', { timeZone: 'America/Santiago' });
        const todayString = format(new Date(), 'yyyy-MM-dd', { timeZone: 'America/Santiago' });

        if (dateString <= todayString) {
            setSelectedDate(date);
            setSelectedEmoji(emojiData[dateString] || null);
        }
    };

    const handleEmojiSelect = (index) => {
        const dateString = format(selectedDate, 'yyyy-MM-dd', { timeZone: 'America/Santiago' });

        if (selectedEmoji === index) {
            setSelectedEmoji(null);
            removeEmoji(dateString);
            localStorage.removeItem('selectedEmoji'); // Eliminar emoji guardado
        } else {
            setSelectedEmoji(index);
            addEmoji(dateString, index);
            localStorage.setItem('selectedEmoji', JSON.stringify(index)); // Guardar emoji seleccionado
        }
    };

    const calculateEmojiStatistics = () => {
        const emojiCounts = {};
        const totalEntries = Object.keys(emojiData).length;

        Object.values(emojiData).forEach((emoji) => {
            if (emojiCounts[emoji]) {
                emojiCounts[emoji]++;
            } else {
                emojiCounts[emoji] = 1;
            }
        });

        return Object.entries(emojiCounts).map(([emoji, count]) => ({
            emoji,
            percentage: ((count / totalEntries) * 100).toFixed(2),
        })).filter(stat => stat.percentage !== "100.00");
    };

    const emojiStatistics = calculateEmojiStatistics();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 to-blue-300">
            <NavbarH />
            <div className="flex flex-row items-start justify-center flex-grow p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Calendario de Emojis</h1>
                    <p className="text-center text-gray-600 mb-4">Monitorea tus emociones día a día</p>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="mb-4"
                        tileClassName={({ date }) => {
                            const dateString = format(date, 'yyyy-MM-dd', { timeZone: 'America/Santiago' });
                            const isToday = dateString === format(new Date(), 'yyyy-MM-dd', { timeZone: 'America/Santiago' });
                            const isFutureDate = date > new Date();

                            if (isToday) {
                                return 'bg-blue-300';
                            } 
                            if (isFutureDate) {
                                return 'bg-gray-300';
                            }
                            return emojiData[dateString] ? 'bg-yellow-200' : '';
                        }}
                    />

                    <div className="flex justify-center mb-4">
                        {selectedDate && (
                            <EmojiIcons selectedEmoji={selectedEmoji} onEmojiSelect={handleEmojiSelect} />
                        )}
                    </div>
                    <div className="text-center">
                        {selectedEmoji !== null && (
                            <p className="text-gray-600">Emoji seleccionado: {emojis[selectedEmoji].expression}</p>
                        )}
                    </div>
                </div>

                {/* Sección para mostrar estadísticas de emojis */}
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs w-full ml-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Estadísticas Emociones</h2>
                    {emojiStatistics.length > 0 ? (
    emojiStatistics.map(({ emoji, percentage }) => (
        <div key={emoji} className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="flex items-center">
                    <span className="mr-2" role="img" aria-label="emoji">
                        {/* Asegúrate de que emojis[emoji] esté definido */}
                        {emojis[emoji] && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30" height="30"
                                viewBox="0 0 100 100"
                            >
                                <circle cx="50" cy="50" r="40" fill={emojis[emoji].color} stroke="black" strokeWidth="2" />
                                <circle cx="35" cy="40" r="5" fill="black" />
                                <circle cx="65" cy="40" r="5" fill="black" />
                                {emoji === 0 && <path d="M30 65 Q50 90 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Muy feliz */}
                                {emoji === 1 && <path d="M30 60 Q50 80 70 60" fill="none" stroke="black" strokeWidth="2" />} {/* Feliz */}
                                {emoji === 2 && <line x1="30" y1="65" x2="70" y2="65" stroke="black" strokeWidth="2" />} {/* Neutral */}
                                {emoji === 3 && <path d="M30 65 Q50 50 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Llorando */}
                                {emoji === 4 && <path d="M70 65 Q50 50 30 65" fill="none" stroke="black" strokeWidth="2" />} {/* Triste */}
                            </svg>
                        )}
                    </span>
                    {emojis[emoji]?.expression} {/* Uso del operador opcional para evitar errores */}
                </span>
                <span>{percentage}%</span>
            </div>
            <div className="bg-gray-300 h-2 rounded">
                <div
                    className="bg-blue-600 h-full rounded"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    ))
) : (
    <p className="text-gray-600 text-center">No hay datos suficientes para mostrar.</p>
)}

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CalendarPage;
