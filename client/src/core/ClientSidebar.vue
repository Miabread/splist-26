<script setup lang="ts">
import { range } from '@/util';
import { Icon } from '@iconify/vue';
</script>

<template>
    <aside
        class="col-[2/2] row-[2/4] flex-1 p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900 rounded-tl-lg overflow-y-auto scrollbar-none"
    >
        <span class="flex gap-2.5 items-center"> <Icon icon="lucide:home" inline /> Home </span>

        <hr class="border-t border-mist-700" />
        <span class="flex gap-2.5 items-center"> <Icon icon="lucide:spool" inline /> Threads </span>

        <span v-for="i in range(7)" :key="i" class="ml-5 flex gap-2.5 items-center">
            <div class="bg-mist-700 rounded-lg w-6 h-6 grid place-items-center text-xs">#</div>
            Thread {{ i + 1 }}
        </span>

        <hr class="border-t border-mist-700" />
        <span class="flex gap-2.5 items-center"> <Icon icon="lucide:user-star" inline /> Friends </span>

        <div class="flex items-center gap-2.5 ml-5" v-for="i in range(7)" :key="i">
            <div
                class="h-6 w-6 rounded-full ring-1 ring-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
            ></div>

            <span class="flex flex-col">
                <span>User {{ i + 1 }}</span>
                <span class="text-xs text-mist-300">User {{ i + 1 }} status</span>
            </span>
        </div>
    </aside>
</template>
