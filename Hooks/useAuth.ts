import { pb } from '@/Util/Pocketbase';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
    const router = useRouter();
    const Login = async (username: string, password: string) => {
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
            console.log('wrong password');
        }
    };

    return { Login };
};
