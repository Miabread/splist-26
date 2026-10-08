<script setup lang="ts">
import { cn } from '@/util';
import { Icon } from '@iconify/vue';

interface Props {
    position: 0 | 1;
}

const props = defineProps<Props>();
</script>

<template>
    <header
        :class="
            cn(
                ['col-[3/4]', 'col-[4/5]'][props.position],
                'row-[1/1] border-l border-b border-mist-700 p-4 flex gap-2.5 items-center bg-mist-800',
            )
        "
    >
        <template v-if="props.position === 1">
            <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs text-mist-300">#</div>
            <span class="text-mist-300 text-xs">Thread 1</span>

            <Icon icon="lucide:chevron-right" class="h-5 w-5" />

            <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
            <span>Thread 2</span>
        </template>
        <template v-else>
            <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
            <span>Thread 1</span>
        </template>
    </header>
</template>
