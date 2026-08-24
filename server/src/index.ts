import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { gatewayApp } from './gateway.js';
import { sessionApp } from './session.js';
import { cors } from 'hono/cors';

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
