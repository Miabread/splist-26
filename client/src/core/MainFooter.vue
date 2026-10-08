<script setup lang="ts">
import { cn } from '@/util';
import { Icon } from '@iconify/vue';

interface Props {
    position: 0 | 1;
}

const props = defineProps<Props>();
</script>

<template>
    <footer
        :class="
            cn(
                ['col-[3/3]', 'col-[4/4]'][props.position],
                'row-[3/4] rounded-lg border border-mist-700 bg-mist-800 mx-2.5 mb-2.5 px-2.5 drop-shadow-2xl flex items-center',
            )
        "
    >
        <textarea
            class="w-full h-full text-mist-300 flex items-center resize-none content-center focus:outline-none"
            :placeholder="`Message Thread ${props.position + 1}`"
        />
        <hr class="border-l border-mist-700 h-3/4 m-2.5" />
        <button
            :class="
                cn(
                    position === 1 && 'bg-mist-600',
                    'hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center',
                )
            "
        >
            <Icon icon="lucide:messages-circle" class="h-5 w-5" />
        </button>
        <button
            :class="
                cn(
                    position === 0 && 'bg-mist-600',
                    'hover:bg-mist-700 active:bg-mist-600 rounded-lg p-2.5 grid place-items-center',
                )
            "
        >
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
