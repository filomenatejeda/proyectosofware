// pages/_app.js
import { LanguageProvider } from '../context/LanguageContext'; // Importa tu contexto de idioma
import { I18nextProvider } from 'react-i18next'; // Importa el proveedor de i18next
import i18next from '../utils/i18n'; // Importa la configuración de i18next
// import '../styles/globals.css'; // Importa tus estilos globales (opcional)

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18next}>
        <Component {...pageProps} />
      </I18nextProvider>
    </LanguageProvider>
  );
}

export default MyApp;