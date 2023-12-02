import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthGuard } from '@/Components/AuthGuard/AuthGuard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gif Wizard 🧙',
    description: 'Save your favourite gifs with magic ✨',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthGuard>{children}</AuthGuard>
            </body>
        </html>
    );
}
