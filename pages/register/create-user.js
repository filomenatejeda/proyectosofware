'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';

export default function CreateUser() {
  const router = useRouter();
  
  // Definir estados para cada campo del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, firstName, lastName,  email }),
    });

    if (response.ok) {
      alert('Usuario creado exitosamente');
      router.push('/loginQ/login'); // Redirigir a la página de inicio de sesión
    } else {
      const data = await response.json();
      setError(data.message); // Mostrar el mensaje de error en caso de fallo
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <div className="w-full fixed top-0 z-50">
          <Navbar />
        </div>
        <div className="mt-40 w-full flex justify-center">
          <form onSubmit={handleSubmit} className="p-6 bg-green-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Crear Cuenta</h2>
             <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
           
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            
            <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Crear Cuenta
            </button>
            {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
            <div className="mt-4 text-center">
              <Link href="/loginQ/login" className="text-green-600">
                Ya tengo una cuenta
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}




