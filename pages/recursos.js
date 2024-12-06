import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const EducationResourcesPage = () => {
    const { t } = useTranslation();
    const [showMoreArticles, setShowMoreArticles] = useState(false);
    const [showMoreVideos, setShowMoreVideos] = useState(false);
    const [showMorePodcasts, setShowMorePodcasts] = useState(false);

    const articles = [
        { title: <h suppressHydrationWarning={true}> {t('anxietydisorders')} </h>, link: '/articulos/ansiedad' },
        { title: <h suppressHydrationWarning={true}> {t('stressmanagement')} </h> , link: '/articulos/estres' },
        { title: '¿Qué es la salud mental y por qué es importante?', link: '/articulos/salud' },
        { title: 'Guía Práctica para Mejorar la Autoestima ', link: '/articulos/autoestima' },
    ];

    const videos = [
        { title: 'Técnicas de relajación', link: '/videos/relajacion' },
        { title: 'Superar una Depresión', link: '/videos/depresion' },
        { title: 'Manejo de ansiedad', link: '/videos/ansiedad' },
    ];

    const podcasts = [
        { title: 'Cómo Conseguir una Autoestima Sana', link: '/podcasts/autoestima' },
        { title: 'Salud mental y bienestar', link: '/podcasts/salud' },
        { title: 'Cómo enfrentar la depresión', link: '/podcasts/enfrentar-depresion' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">

                {t('educational_resources')} 
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center ">

                {t('intoeducational_resources')} 

                </p>

                {/* Sección de Artículos */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('articles')}</h2>
                    <div className="flex flex-col space-y-4">
                        {articles.slice(0, showMoreArticles ? articles.length : 2).map((article, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{article.title}</h3>
                                <Link suppressHydrationWarning={true} href={article.link} className="text-blue-500 hover:underline">
                                {t('read_more')}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button onClick={() => setShowMoreArticles(!showMoreArticles)} suppressHydrationWarning={true} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMoreArticles ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>

                {/* Sección de Videos */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('videos')}</h2>
                    <div className="flex flex-col space-y-4">
                        {videos.slice(0, showMoreVideos ? videos.length : 2).map((video, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{video.title}</h3>
                                <Link href={video.link} className="text-blue-500 hover:underline">
                                   Ver más
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button suppressHydrationWarning={true} onClick={() => setShowMoreVideos(!showMoreVideos)} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMoreVideos ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>

                {/* Sección de Podcasts */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('Podcasts')}</h2>
                    <div className="flex flex-col space-y-4">
                        {podcasts.slice(0, showMorePodcasts ? podcasts.length : 2).map((podcast, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{podcast.title}</h3>
                                <Link href={podcast.link} className="text-blue-500 hover:underline">
                                    Escuchar más
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button suppressHydrationWarning={true} onClick={() => setShowMorePodcasts(!showMorePodcasts)} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMorePodcasts ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EducationResourcesPage;
