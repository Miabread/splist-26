<script setup lang="ts">
import { range } from '@/util';
</script>

<template>
    <aside
        class="col-[2/2] row-[2/4] flex-1 p-4 gap-2.5 flex flex-col border-l border-mist-700 bg-mist-900 rounded-tl-lg"
    >
        <span class="flex gap-2.5 items-center"> <Icon icon="lucide:list-tree" inline /> Threads </span>
        <hr class="border-t border-mist-700" />
        <template v-for="i in range(4)" :key="i">
            <span class="flex gap-2.5 items-center">
                <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                Thread {{ i }}
            </span>
            <span v-for="j in range(i)" :key="j" class="ml-5 flex gap-2.5 items-center">
                <div class="bg-mist-700 rounded-lg w-5 h-5 grid place-items-center text-xs">#</div>
                Thread {{ j }}
            </span>
        </template>
    </aside>
</template>
