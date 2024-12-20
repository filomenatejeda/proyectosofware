import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const EmotionalBurnoutPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/vUTfy8dP8vM'; // Cambia a la URL adecuada para el iframe

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('exhaustion_mental')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('intoexhaustion_mental')}
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                        height="315"
                        src={videoUrl}
                        title={t('Video sobre agotamiento emocional')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('emotional_exhaustion')}</h2>
                    <p suppressHydrationWarning={true}className="text-gray-700 mb-2">
                        {t('intoemotional_exhaustion')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('signs_emotional')}</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>{t('feeling_constant')}</li>
                        <li suppressHydrationWarning={true}>{t('difficulty_concentrating')}</li>
                        <li suppressHydrationWarning={true}>{t('feelings_demotivation')}</li>
                        <li suppressHydrationWarning={true}>{t('irritability_frequent')}</li>
                        <li suppressHydrationWarning={true} >{t('tendency_isolation')}</li>
                    </ul>
                </div>
            
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('tips_managing')}</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('practice_self_care')}</strong> {t('make_time')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('set_boundaries')}</strong> {t('avoid_overcommitting')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('excercise')}</strong> {t('excercise_helps_reduce')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('connect_others')}</strong> {t('talking_friends')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('seek_professional')}</strong> {t('burnout_persists')}
                        </li>
                    </ol>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true} href="/recursos" className="text-blue-500 hover:underline">
                        {t('educational_resources')}
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmotionalBurnoutPage;
