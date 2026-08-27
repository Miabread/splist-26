import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { gatewayApp } from './gateway.js';
import { sessionApp } from './session.js';
import { cors } from 'hono/cors';
import { drizzle } from 'drizzle-orm/libsql';

export const db = drizzle(process.env.DB_FILE_NAME!);

const app = new Hono()
    .use(
        '/api/*',
        cors({
            origin: (origin) => origin,
            allowHeaders: ['Authorization', 'Content-Type'],
            allowMethods: ['GET', 'POST', 'OPTIONS'],
        }),
    )
    .route('/api/v0/gateway', gatewayApp)
    .route('/api/v0/session', sessionApp);

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    },
);

export type AppType = typeof app;
