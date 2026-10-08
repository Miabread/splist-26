<script setup lang="ts">
import ClientFooter from './ClientFooter.vue';
import MainFooter from './MainFooter.vue';
import ClientSidebar from './ClientSidebar.vue';
import ClientTabs from './ClientTabs.vue';
import ClientHeader from './ClientHeader.vue';
import MainHeader from './MainHeader.vue';
import MainContent from './MainContent.vue';
</script>

<template>
    <div
        class="w-dvw h-dvh bg-mist-950 text-mist-100 grid grid-cols-[--spacing(16)_--spacing(64)_1fr_1fr] grid-rows-[--spacing(calc(16-2.5))_1fr_--spacing(16)]"
    >
        <ClientTabs />

        <ClientHeader />

        <ClientSidebar />

        <ClientFooter />

        <MainHeader :position="0" />

        <MainContent :position="0" />

        <MainFooter :position="0" />

        <MainHeader :position="1" />

        <MainContent :position="1" />

        <MainFooter :position="1" />
    </div>
</template>
