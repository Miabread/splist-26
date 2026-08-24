<script setup lang="ts">
import { range } from '@/util';
</script>

<template>
    <aside class="col-[4/4] row-[2/4] p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900">
        <div class="flex items-center gap-2.5" v-for="i in range(7)" :key="i">
            <div
                class="h-8 w-8 rounded-full ring-1 ring-mist-700 bg-blue-300 grid place-items-center text-mist-800 text-base"
            ></div>

            <span class="flex flex-col">
                <span>User {{ i }}</span>
                <span class="text-xs text-mist-300">Super {{ i }} status</span>
            </span>
        </div>
    </aside>
</template>
