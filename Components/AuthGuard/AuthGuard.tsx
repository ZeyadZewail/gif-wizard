'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { pb } from '@/Util/Pocketbase';
import { useRouter } from 'next/navigation';

export const AuthGuard = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!pb.authStore.isValid) {
            router.push('/auth');
        }
        setLoading(false);
    }, [router]);

    return <>{loading || typeof document === 'undefined' ? null : children}</>;
};
