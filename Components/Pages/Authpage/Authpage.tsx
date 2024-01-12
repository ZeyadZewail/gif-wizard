'use client';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '@/Hooks/useAuth';
import Threedotsfade from '@/assets/Threedotsfade.svg';
import Image from 'next/image';

export const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { Login, loading } = useAuth();

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="h-full w-full flex flex-col gap-16 items-center justify-center">
            <div className="text-6xl text-center">🧙 GIF Wizard</div>
            <div className="flex flex-col gap-4">
                <div>Username</div>
                <input
                    className="text-black rounded-lg p-1 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <div>Password</div>
                <input
                    className="text-black rounded-lg p-1 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    className="bg-gray-300 w-20 p-2 rounded-lg self-center text-black flex justify-center"
                    onClick={() => Login(username, password)}
                >
                    {loading ? (
                        <Image src={Threedotsfade} alt="loading" />
                    ) : (
                        'Login'
                    )}
                </button>
            </div>
        </div>
    );
};
