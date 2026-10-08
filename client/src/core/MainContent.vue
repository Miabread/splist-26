<script setup lang="ts">
import { cn } from '@/util';

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
                'row-[2/4] p-4 border-l border-mist-700 bg-mist-900 grid place-items-center',
            )
        "
    >
        <template v-if="position === 0"> Thread 1 Threads </template>
        <template v-else> Thread 2 Messages </template>
    </main>
</template>
