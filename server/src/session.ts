import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import { NETWORK_AUTH_SECRET } from './config.js';

export const sessionApp = new Hono().use(jwt({ secret: NETWORK_AUTH_SECRET, alg: 'HS256' }));
