// pages/log/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '/components/Navbar';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recuperar la contraseña del localStorage
    const storedPassword = localStorage.getItem(username);

    // Verificar si la contraseña ingresada es correcta
    if (storedPassword && storedPassword === password) {
      router.push('/log/home'); // Redirigir a la página de inicio
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>

      {/* Añadimos un margen superior al contenido para evitar que se superponga con el navbar */}
      <div className="mt-40 w-full flex justify-center">
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">
            Entrar
          </button>
          
          <div className="mt-4 text-center">
            <Link href="/log/create-user" className="text-blue-600">
              Crear Usuario
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

