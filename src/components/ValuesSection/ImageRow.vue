<template>
    <div class="flex flex-row h-full">
        <img v-for="(image, i) in images" :key="i" :src="image.src" :alt="image.alt"
            :class="height + ' w-auto object-cover shadow-xl'" loading="lazy" />
    </div>
</template>

<script setup lang="ts">
import type { ImageRowImage } from '@/types/imageRowImage';

defineProps<{
    images: ImageRowImage[];
    height: string;
}>();
</script>