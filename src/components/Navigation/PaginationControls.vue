<template>
    <div class="flex justify-start md:justify-end mb-5 space-x-2">
        <button @click="$emit('previous')" :disabled="disablePrev"
            class="w-8 h-8 rounded-full bg-bg-secondary md:bg-bg-variation md:shadow-xl/25 flex items-center justify-center text-lg cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <span class="text-text-secondary md:text-text-primary font-extrabold">&lt;</span>
        </button>
        <button @click="$emit('next')" :disabled="disableNext"
            class="w-8 h-8 rounded-full bg-bg-secondary md:bg-bg-variation md:shadow-xl/25 flex items-center justify-center text-lg cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <span class="text-text-secondary md:text-text-primary font-extrabold">&gt;</span>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    disablePrev?: boolean;
    disableNext?: boolean;
}>();

defineEmits<{
    previous: [];
    next: [];
}>();
</script>