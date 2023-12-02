'use client';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '@/Hooks/useAuth';

export const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { Login } = useAuth();

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <input
                    className="text-black rounded-lg p-1 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    className="text-black rounded-lg p-1 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    className="bg-gray-300 w-20 p-2 rounded-lg self-center text-black"
                    onClick={() => Login(username, password)}
                >
                    Login
                </button>
            </div>
        </div>
    );
};
