import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const range = (start: number, length?: number) => {
    if (!length) {
        length = start;
        start = 0;
    }

    return Array.from({ length }, (_, i) => i + start);
};

export const parseJwtBody = (token: string) => {
    try {
        const base64 = (token.split('.')[1] ?? '').replace(/-/g, '+').replace(/_/g, '/');
        const uri = atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('');

        return JSON.parse(decodeURIComponent(uri));
    } catch (error) {
        console.error('Invalid JWT token format', error);
    }
};
