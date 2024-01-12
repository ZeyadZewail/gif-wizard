'use client';

import { pb } from '@/Util/Pocketbase';
import { useRouter } from 'next/navigation';

export const LogOutButton = () => {
    const { push } = useRouter();

    return (
        <button
            className="bg-gray-300 w-20 p-2 rounded-lg self-center text-black flex justify-center"
            onClick={() => {
                pb.authStore.clear();
                push('/auth');
            }}
        >
            Log Out
        </button>
    );
};
