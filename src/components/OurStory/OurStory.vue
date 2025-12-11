<template>
    <OurStoryMobile v-if="isMobile" />
    <OurStoryDesktop v-else />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import OurStoryMobile from './OurStoryMobile.vue';
import OurStoryDesktop from './OurStoryDesktop.vue';

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>