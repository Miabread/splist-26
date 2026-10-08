<script setup lang="ts">
import ClientFooter from './ClientFooter.vue';
import MainFooter from './MainFooter.vue';
import ThreadFooter from './ThreadFooter.vue';
import ThreadSidebar from './ThreadSidebar.vue';
import ClientSidebar from './ClientSidebar.vue';
import ClientTabs from './ClientTabs.vue';
import ThreadTabs from './ThreadTabs.vue';
</script>

<template>
    <div
        class="w-dvw h-dvh bg-mist-950 text-mist-100 grid grid-cols-[--spacing(16)_--spacing(64)_1fr_--spacing(64)_--spacing(16)] grid-rows-[--spacing(calc(16-2.5))_1fr_--spacing(16)]"
    >
        <ClientTabs />

        <header
            class="col-[2/2] row-[1/1] border-l border-b border-mist-700 p-4 flex gap-2.5 items-center rounded-l-lg bg-mist-800"
        >
            <div class="bg-orange-300 rounded-lg w-5 h-5 grid place-items-center text-mist-800 text-xs"></div>
            Spool Name
        </header>

        <ClientSidebar />

        <header class="col-[3/3] row-[1/1] border-l border-b border-mist-700 p-4 flex gap-2.5 items-center bg-mist-800">
            <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
            Thread Name
        </header>

        <main class="col-[3/3] row-[2/4] p-4 border-l border-mist-700 bg-mist-900">Thread content</main>

        <header
            class="col-[4/4] row-[1/1] border-l border-b border-r border-mist-700 p-4 bg-mist-800 rounded-r-lg"
        ></header>

        <ThreadSidebar />

        <ThreadTabs />

        <ClientFooter />

        <MainFooter />

        <ThreadFooter />
    </div>
</template>
