<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onClickOutside, useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';
import { parseJwtBody, range } from '../util';

const isConnectionsOpen = ref(false);
const connectionsPaneRef = ref(null);
const clientPaneRef = ref(null);

const toggleConnectionsPane = () => {
    isConnectionsOpen.value = !isConnectionsOpen.value;
};

onClickOutside(
    connectionsPaneRef,
    () => {
        console.log('meow');
        if (isConnectionsOpen.value) isConnectionsOpen.value = false;
    },
    { ignore: [clientPaneRef] },
);

interface Connection {
    sub: string;
    sub_name: string;
    iss: string;
    iss_name: string;
    jwt: string;
}

const connections = useLocalStorage('connections', new Map<number, Connection>());

const nextConnectionId = useLocalStorage('connectionId', 0);
const getNextConnectionId = () => nextConnectionId.value++;

const newConnectionToken = ref('');

const createNewConnection = () => {
    const body = parseJwtBody(newConnectionToken.value);
    body['jwt'] = newConnectionToken;
    connections.value.set(getNextConnectionId(), body);
};
</script>

<template>
    <footer
        ref="clientPaneRef"
        class="col-[1/3] row-[3/3] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 gap-5 px-2.5 drop-shadow-2xl flex flex-row-reverse items-center"
    >
        <Icon icon="lucide:settings" class="h-5 w-5" />
        <Icon icon="lucide:file-chart-column" class="h-5 w-5" />
        <Icon icon="lucide:telescope" class="h-5 w-5" />

        <button
            @click="toggleConnectionsPane"
            class="mr-auto flex -space-x-3 overflow-hidden items-center drop-shadow-2xl rounded-lg hover:bg-mist-700 active:bg-mist-600 py-1 px-2.5"
        >
            <span class="h-5 w-5 flex items-center justify-center text-center mr-1">
                <Icon icon="lucide:radio-tower" class="h-5 w-5" />
            </span>

            <div
                v-for="i in range(4)"
                :key="i"
                class="h-8 w-8 rounded-full border border-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
            ></div>
        </button>
    </footer>

    <Transition
        enter-active-class="transform transition duration-300 ease-out origin-bottom"
        enter-from-class="scale-y-0"
        enter-to-class="scale-y-100"
        leave-active-class="transform transition duration-200 ease-in origin-bottom"
        leave-from-class="scale-y-100"
        leave-to-class="scale-y-0"
    >
        <aside
            v-if="isConnectionsOpen"
            ref="connectionsPaneRef"
            class="col-[1/3] row-[2/2] rounded-lg border-x border-t border-mist-700 bg-mist-800 m-2.5 mt-10 p-2.5 drop-shadow-2xl flex flex-col justify-between"
        >
            <div
                class="flex-1 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] content-start gap-x-2.5 gap-y-5 items-center"
            >
                <template v-for="[id, value] in connections" :key="id">
                    <div class="flex items-center gap-2.5">
                        <div class="h-8 w-8 flex-none rounded-xl bg-orange-300 grid place-items-center"></div>

                        <span class="flex flex-col min-w-0">
                            <span class="truncate">{{ value.iss_name }}</span>
                            <span class="text-xs text-mist-300 truncate">{{
                                value.iss.replace(/^https?:\/\//i, '')
                            }}</span>
                        </span>
                    </div>

                    <div class="flex items-center gap-2.5">
                        <div class="h-8 w-8 flex-none rounded-full bg-blue-300 grid place-items-center"></div>

                        <span class="flex flex-col min-w-0">
                            <span class="truncate">{{ value.sub_name }}</span>
                            <span class="text-xs text-mist-300 truncate">{{ value.sub }}</span>
                        </span>
                    </div>

                    <div class="flex gap-2.5">
                        <Icon icon="lucide:square-play" class="h-5 w-5" />
                        <Icon icon="lucide:trash-2" class="h-5 w-5" />
                    </div>
                </template>
            </div>
            <input
                type="text"
                autocomplete="off"
                class="bg-mist-900 border border-mist-700 rounded self-end w-full focus:outline-none p-1"
                placeholder="Add new connection token"
                v-model="newConnectionToken"
                @keypress.enter="createNewConnection"
            />
        </aside>
    </Transition>
</template>
