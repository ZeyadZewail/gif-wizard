import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { pb } from '@/Util/Pocketbase';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const request_cookie = request.cookies.get('pb_auth');
    pb.authStore.clear();

    if (request.nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.next();
    }

    if (request_cookie) {
        try {
            const jsonCookie = JSON.parse(request_cookie.value);
            pb.authStore.save(jsonCookie.token, jsonCookie.model);
        } catch (error) {
            response.cookies.set(request_cookie.name, request_cookie.value);
        }
    }

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        pb.authStore.isValid && (await pb.collection('users').authRefresh());
    } catch (err) {
        response.cookies.set(
            'pb_auth',
            pb.authStore.exportToCookie({ httpOnly: false })
        );
    }

    // if (request.nextUrl.pathname.startsWith('/auth')) {
    //     return response;
    // }

    if (
        !pb.authStore.isValid &&
        !request.nextUrl.pathname.startsWith('/auth')
    ) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    if (pb.authStore.isValid && request.nextUrl.pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/:path*', '/auth/:path*'],
};
