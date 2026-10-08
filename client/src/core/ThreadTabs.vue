<script setup lang="ts">
import { range } from '@/util';
import { Icon } from '@iconify/vue';
</script>

<template>
    <nav class="col-[5/5] row-[1/3] mx-2.5 mt-2.5 px-0.5 pt-0.5 space-y-2.5 overflow-y-auto scrollbar-none">
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:spool" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:user-group" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:pin" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:image" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:file" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:link" class="h-5 w-5" />
        </button>
        <hr class="border-t border-mist-700" />
        <div
            v-for="i in range(3, 30)"
            :key="i"
            class="bg-blue-300 rounded-full w-full aspect-square grid place-items-center text-mist-800 text-xl"
        ></div>
    </nav>
</template>
