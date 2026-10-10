<script setup lang="ts">
import { cn } from '@/util';
import { messages } from '@/mock';

interface Props {
    position: 0 | 1;
}

const props = defineProps<Props>();
</script>

<template>
    <main
        :class="
            cn(
                ['col-[3/3]', 'col-[4/4]'][props.position],
                'row-[2/4] p-4 border-l border-mist-700 bg-mist-900 flex flex-col overflow-y-auto scrollbar-gutter-stable',
            )
        "
    >
        <span v-for="(message, i) in messages" :key="i">{{ message }}</span>
    </main>
</template>
