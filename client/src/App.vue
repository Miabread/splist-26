<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import { range } from './util';

const isConnectionsOpen = ref(false);
const sidebarRef = ref(null);

const toggleConnectionsPane = () => {
    isConnectionsOpen.value = !isConnectionsOpen.value;
};

onClickOutside(sidebarRef, () => {
    if (isConnectionsOpen.value) isConnectionsOpen.value = false;
});
</script>

<template>
    <div
        class="w-dvw h-dvh bg-mist-950 text-mist-100 grid grid-cols-[--spacing(16)_--spacing(64)_1fr_--spacing(64)] grid-rows-[--spacing(16)_1fr_--spacing(16)]"
    >
        <nav class="col-[1/1] row-[1/4] mx-2.5 mt-2 px-0.5 space-y-2.5 justify-center overflow-y-auto scrollbar-none">
            <div
                v-for="i in range(3)"
                :key="i"
                class="bg-orange-300 rounded-xl w-full aspect-square grid place-items-center text-mist-800 text-xl"
            ></div>
            <hr class="border-t border-mist-700" />
            <div
                v-for="i in range(3, 20)"
                :key="i"
                class="bg-orange-300 rounded-xl w-full aspect-square grid place-items-center text-mist-800 text-xl"
            ></div>
        </nav>

        <header
            class="col-[2/2] row-[1/1] border-l border-b border-mist-700 p-4 flex gap-2.5 items-center rounded-bl-lg bg-mist-800"
        >
            <div class="bg-orange-300 rounded-lg w-5 h-5 grid place-items-center text-mist-800 text-xs"></div>
            Server Name
        </header>

        <div
            class="col-[2/2] row-[2/4] flex-1 p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900 rounded-tl-lg"
        >
            <span class="flex gap-2.5 items-center"> <Icon icon="lucide:list-tree" inline /> Threads </span>
            <hr class="border-t border-mist-700" />
            <template v-for="i in range(4)" :key="i">
                <span class="flex gap-2.5 items-center">
                    <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                    Thread {{ i }}
                </span>
                <span v-for="j in range(i)" :key="j" class="ml-5 flex gap-2.5 items-center">
                    <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                    Thread {{ j }}
                </span>
            </template>
        </div>

        <header class="col-[3/3] row-[1/1] border-l border-b border-mist-700 p-4 flex gap-2.5 items-center bg-mist-800">
            <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
            Thread Name
        </header>

        <div class="col-[3/3] row-[2/4] p-4 border-l border-mist-700 bg-mist-900">Main content</div>

        <header class="col-[4/4] row-[1/1] border-l border-b border-mist-700 p-4 bg-mist-800"></header>

        <div class="col-[4/4] row-[2/4] p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900">
            <div class="flex items-center gap-2.5" v-for="i in range(7)" :key="i">
                <div
                    class="h-8 w-8 rounded-full ring-1 ring-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
                ></div>

                <span class="flex flex-col">
                    <span>User {{ i }}</span>
                    <span class="text-xs text-mist-300">Super {{ i }} status</span>
                </span>
            </div>
        </div>

        <div
            class="col-[1/3] row-[3/3] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 gap-5 px-2.5 drop-shadow-2xl flex flex-row-reverse items-center"
        >
            <Icon icon="lucide:settings" class="h-5 w-5" />
            <Icon icon="lucide:file-chart-column" class="h-5 w-5" />
            <Icon icon="lucide:telescope" class="h-5 w-5" />

            <div
                class="mr-auto flex flex-row-reverse space-x-reverse -space-x-3 overflow-hidden items-center drop-shadow-2xl"
            >
                <div
                    v-for="i in range(4)"
                    :key="i"
                    class="h-8 w-8 rounded-full border border-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base drop-shadow-2xl"
                ></div>

                <div class="h-10 w-10 rounded-full border border-mist-700 bg-mist-700 drop-shadow-2xl">
                    <button
                        @click="toggleConnectionsPane"
                        class="h-full w-full flex items-center justify-center text-center"
                    >
                        <Icon icon="lucide:radio-tower" class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>

        <div
            class="col-[3/3] row-[3/3] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 px-2.5 drop-shadow-2xl flex items-center"
        >
            <span class="text-mist-300 flex items-center">Message Thread 1</span>
        </div>

        <div
            class="col-[4/4] row-[3/3] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 px-2.5 drop-shadow-2xl flex items-center gap-2.5"
        >
            <div
                class="h-8 w-8 rounded-full ring-1 ring-mist-800 bg-blue-300 grid place-items-center text-mist-800 text-base"
            ></div>

            <span class="flex flex-col">
                <span>Username</span>
                <span class="text-xs text-mist-300">Super cool status</span>
            </span>
        </div>
    </div>
</template>
