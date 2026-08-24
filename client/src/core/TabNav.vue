<script setup lang="ts">
import { range } from '@/util';
</script>

<template>
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
</template>
