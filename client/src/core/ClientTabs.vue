<script setup lang="ts">
import { range } from '@/util';
</script>

<template>
    <nav class="col-[1/2] row-[1/3] mx-2.5 mt-2.5 px-0.5 pt-0.5 space-y-2.5 overflow-y-auto scrollbar-none">
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
    <div class="col-[1/2] row-[3/4]"></div>
</template>
