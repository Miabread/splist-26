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
