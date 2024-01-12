import { pb } from '@/Util/Pocketbase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useAuth = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const Login = async (username: string, password: string) => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const authData = await pb
                .collection('users')
                .authWithPassword(username, password);

            if (authData.token) {
                console.log('logged in');
                document.cookie = pb.authStore.exportToCookie({
                    path: '/',
                    httpOnly: false,
                });
                router.push('/');
            } else {
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
        }
    };

    return { Login, loading };
};
