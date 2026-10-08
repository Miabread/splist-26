<script setup lang="ts">
import { range } from '@/util';
import { Icon } from '@iconify/vue';
</script>

<template>
    <aside
        class="col-[2/2] row-[2/4] flex-1 p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900 rounded-tl-lg overflow-y-auto scrollbar-none"
    >
    <div class="flex items-center gap-2.5">
        <div
            class="h-8 w-8 aspect-square rounded-full bg-blue-300 grid place-items-center text-mist-800 text-base"
        ></div>

            <span class="flex flex-col">
                <span>You</span>
                <span class="text-xs text-mist-300 truncate">Super cool status</span>
            </span>
        </div>

        <span class="flex gap-2.5 items-center text-mist-300 text-sm mt-2.5"><span>Following</span> <Icon icon="lucide:chevron-down" inline /></span>

        <div class="flex items-center gap-2.5 ml-5" v-for="i in range(7)" :key="i">
            <div
                class="h-8 w-8 rounded-lg bg-mist-700 grid place-items-center text-mist-800 text-base"
            ></div>

            <span class="flex flex-col">
                <span>Thread {{ i + 1 }}</span>
                <span class="text-xs text-mist-300">Latest message</span>
            </span>
        </div>

        <span class="flex gap-2.5 items-center text-mist-300 text-sm mt-2.5"><span>Friends</span> <Icon icon="lucide:chevron-down" inline /> </span>

        <div class="flex items-center gap-2.5 ml-5" v-for="i in range(7)" :key="i">
            <div
                class="h-8 w-8 rounded-full bg-blue-300 grid place-items-center text-mist-800 text-base"
            ></div>

            <span class="flex flex-col">
                <span>User {{ i + 1 }}</span>
                <span class="text-xs text-mist-300">Status message</span>
            </span>
        </div>
    </aside>
</template>
