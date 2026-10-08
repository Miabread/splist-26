<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <nav
        class="col-[5/5] row-[2/3] mx-2.5 mt-2 px-0.5 space-y-2.5 justify-center overflow-y-auto scrollbar-none flex flex-col items-center"
    >
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
    </nav>
</template>
