<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <footer
        class="col-[4/6] row-[3/3] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 px-2.5 drop-shadow-2xl flex items-center gap-2.5"
    >
        <div
            class="h-8 w-8 aspect-square rounded-full ring-1 ring-mist-800 bg-blue-300 grid place-items-center text-mist-800 text-base"
        ></div>

        <span class="flex flex-col">
            <span>Username</span>
            <span class="text-xs text-mist-300 truncate">Super cool status</span>
        </span>

        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center ml-auto">
            <Icon icon="lucide:mic" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:headphones" class="h-5 w-5" />
        </button>
    </footer>
</template>
