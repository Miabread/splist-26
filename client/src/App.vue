<script setup lang="ts">
import { Icon } from '@iconify/vue';

const arr = (length: number, b: number = 0) => Array.from({ length }, (_, i) => i + b + 1);
</script>

<template>
    <div class="w-dvw h-dvh bg-mist-900 text-mist-100 flex relative">
        <nav class="w-12 h-full mx-2.5 mt-2 px-0.5 space-y-2.5 justify-center overflow-y-auto scrollbar-none">
            <div
                v-for="i in arr(3)"
                :key="i"
                class="bg-orange-300 rounded-xl w-full aspect-square grid place-items-center text-mist-800 text-xl"
            ></div>
            <hr class="border-t border-mist-700" />
            <div
                v-for="i in arr(20, 3)"
                :key="i"
                class="bg-orange-300 rounded-xl w-full aspect-square grid place-items-center text-mist-800 text-xl"
            ></div>
        </nav>

        <aside class="w-64 h-full border-l border-t border-mist-700 bg-mist-800 flex flex-col">
            <header class="border-b border-mist-700 p-4 h-14 flex gap-2.5 items-center">
                <div class="bg-orange-300 rounded-lg w-5 h-5 grid place-items-center text-mist-800 text-xs"></div>
                Server Name
            </header>
            <div class="flex-1 p-4 gap-2.5 flex flex-col">
                <span class="flex gap-2.5 items-center"> <Icon icon="lucide:list-tree" inline /> Threads </span>
                <hr class="border-t border-mist-700" />
                <template v-for="i in arr(4)" :key="i">
                    <span class="flex gap-2.5 items-center">
                        <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                        Thread {{ i }}
                    </span>
                    <span v-for="j in arr(i)" :key="j" class="ml-5 flex gap-2.5 items-center">
                        <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                        Thread {{ j }}
                    </span>
                </template>
            </div>
        </aside>

        <main class="flex-1 h-full border-l border-t border-mist-700 bg-mist-800">
            <header class="border-b border-mist-700 p-4 h-14 flex gap-2.5 items-center">
                <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                Thread Name
            </header>
            <div class="flex-1 p-4"></div>
        </main>

        <aside class="w-64 h-full border-l border-t border-mist-700 bg-mist-800">
            <header class="border-b border-mist-700 p-4 h-14"></header>
            <div class="flex-1 p-4 gap-2.5 flex flex-col">
                <div class="flex items-center gap-2.5" v-for="i in arr(7)" :key="i">
                    <div
                        class="h-8 w-8 rounded-full ring-1 ring-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
                    ></div>

                    <span class="flex flex-col">
                        <span>User {{ i }}</span>
                        <span class="text-xs text-mist-300">Super {{ i }} status</span>
                    </span>
                </div>
            </div>
        </aside>

        <div class="absolute bottom-0 flex w-full">
            <div class="w-81">
                <div class="h-15 rounded-lg bg-mist-700 m-2.5 gap-5 px-5 drop-shadow-2xl flex items-center">
                    <Icon icon="lucide:settings" class="h-5 w-5" />
                    <Icon icon="lucide:file-chart-column" class="h-5 w-5" />
                    <Icon icon="lucide:telescope" class="h-5 w-5" />

                    <div class="ml-auto flex flex-row -space-x-3 overflow-hidden">
                        <div
                            v-for="i in arr(4)"
                            :key="i"
                            class="h-8 w-8 rounded-full border-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
                        ></div>

                        <div class="h-8 w-8 rounded-full border-mist-700 bg-mist-800 text-base font-semibold">
                            <div class="h-full w-full flex items-center justify-center text-center">
                                <Icon icon="lucide:radio-tower" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <div class="h-15 rounded-lg bg-mist-700 m-2.5 px-5 drop-shadow-2xl flex items-center">
                    <span class="text-mist-300 flex items-center">Message Thread 1</span>
                </div>
            </div>

            <div class="w-64">
                <div class="h-15 rounded-lg bg-mist-700 m-2.5 px-5 drop-shadow-2xl flex items-center gap-2.5">
                    <div
                        class="h-8 w-8 rounded-full ring-1 ring-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
                    ></div>

                    <span class="flex flex-col">
                        <span>Username</span>
                        <span class="text-xs text-mist-300">Super cool status</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
