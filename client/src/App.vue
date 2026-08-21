<script setup lang="ts">
const arr = (length: number) => Array.from({ length }, (_, i) => i);
</script>

<template>
    <div class="w-dvw h-dvh bg-mist-900 text-mist-100 border-mist-100 flex flex-col">
        <header class="text-center h-1/24">meow</header>
        <div class="flex h-23/24 relative">
            <nav class="w-12 h-full mx-2.5 px-0.5 space-y-2.5 justify-center overflow-y-auto scrollbar-none">
                <div
                    v-for="i in arr(20)"
                    :key="i"
                    class="bg-orange-300 rounded-lg w-full aspect-square grid place-items-center"
                >
                    {{ i }}
                </div>
            </nav>
            <aside class="w-64 h-full border-l border-t p-4 rounded-tl-lg bg-mist-800">Left Sidebar</aside>
            <main class="flex-1 h-full border-l border-t p-4 bg-mist-900">Main Area</main>
            <aside class="w-64 h-full border-l border-t p-4 bg-mist-800">Right Sidebar</aside>

            <div class="absolute bottom-0 flex w-full">
                <div class="w-81"><div class="rounded-lg bg-mist-700 m-2.5 p-5">Left Float</div></div>
                <div class="flex-1"><div class="rounded-lg bg-mist-700 m-2.5 p-5">Main Float</div></div>
                <div class="w-64"><div class="rounded-lg bg-mist-700 m-2.5 p-5">Right Float</div></div>
            </div>
        </div>
    </div>
</template>
