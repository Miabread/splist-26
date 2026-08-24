import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { NETWORK_AUTH_SECRET } from './config.js';
import { zValidator } from '@hono/zod-validator';
import * as z from 'zod';

export const gatewayApp = new Hono().get(
    '/devkey',
    zValidator('query', z.object({ userId: z.string() })),
    async (c) => {
        const { userId } = c.req.valid('query');

        // Issue a JWT signed uniquely by THIS server's key
        const token = await sign(
            {
                sub: userId,
                sub_name: 'TODO',
                iss: 'http://localhost:3000/',
                iss_name: 'Localhost',
            },
            NETWORK_AUTH_SECRET,
        );

        return c.text(token);
    },
);
