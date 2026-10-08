<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>


<template>
    <footer
        class="row-[3/4] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 px-2.5 drop-shadow-2xl flex items-center"
    >
        <textarea
            class="w-full h-full text-mist-300 flex items-center resize-none content-center focus:outline-none"
            placeholder="Message Thread 1"
        />
        <hr class="border-l border-mist-700 h-3/4 m-2.5"/>
        <button class="hover:bg-mist-700 active:bg-mist-600 bg-mist-700 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:messages-circle" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:spool" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:user-group" class="h-5 w-5" />
        </button>
        <button class="hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center">
            <Icon icon="lucide:chevron-up" class="h-5 w-5" />
        </button>
    </footer>
</template>
