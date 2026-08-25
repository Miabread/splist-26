import { hc } from 'hono/client';
import type { AppType } from 'server';
import { useLocalStorage } from '@vueuse/core';
import { parseJwtBody } from '@/util';

interface Connection {
    sub: string;
    sub_name: string;
    iss: string;
    iss_name: string;
    jwt: string;
    id: number;
    active: boolean;
}

export const clients = new Map<number, ReturnType<typeof hc<AppType>>>();

export const connectionsInfo = useLocalStorage('connections', new Map<number, Connection>());

const nextConnectionId = useLocalStorage('connectionId', 0);
const getNextConnectionId = () => nextConnectionId.value++;

export const createConnection = (token: string) => {
    const body = parseJwtBody(token) as Connection;
    body.jwt = token;
    body.id = getNextConnectionId();
    body.active = false;
    connectionsInfo.value.set(body['id'], body);
};

export const deleteConnection = (id: number) => {
    clients.delete(id);
    connectionsInfo.value.delete(id);
};

export const startConnection = (id: number) => {
    const info = connectionsInfo.value.get(id);
    if (!info) {
        console.error(`Can't start connection due to no connection info with id ${id}`);
        return;
    }
    info.active = true;
    clients.set(id, hc<AppType>(info.iss));
};

export const stopConnection = (id: number) => {
    const info = connectionsInfo.value.get(id);
    if (!info) {
        console.error(`Can't stop connection due to no connection info with id ${id}`);
        return;
    }

    if (!clients.delete(id)) {
        console.error(`Can't stop connection ${id} because it wasn't started`);
        return;
    }

    info.active = false;
};
