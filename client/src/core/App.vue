<script setup lang="ts">
import ClientFooter from './ClientFooter.vue';
import MainFooter from './MainFooter.vue';
import ThreadFooter from './ThreadFooter.vue';
import ThreadSidebar from './ThreadSidebar.vue';
import ClientSidebar from './ClientSidebar.vue';
import ClientTabs from './ClientTabs.vue';
import ThreadTabs from './ThreadTabs.vue';
import ClientHeader from './ClientHeader.vue'
import MainHeader from './MainHeader.vue'
import ThreadHeader from './ThreadHeader.vue'
import MainContent from './MainContent.vue'
</script>

<template>
    <div
        class="w-dvw h-dvh bg-mist-950 text-mist-100 grid grid-cols-[--spacing(16)_--spacing(64)_1fr_--spacing(64)_--spacing(16)] grid-rows-[--spacing(calc(16-2.5))_1fr_--spacing(16)]"
    >
        <ClientTabs />

        <ClientHeader />

        <ClientSidebar />

        <MainHeader />

        <MainContent />

        <ThreadHeader />

        <ThreadSidebar />

        <ThreadTabs />

        <ClientFooter />

        <MainFooter />

        <ThreadFooter />
    </div>
</template>
