<template>
    <div @click="$emit('selectMember', member)"
        class="aspect-[3/4] bg-gray-200 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">

        <img v-if="!imageLoadError" :src="member.photoUrlBw" :alt="`Photo of ${member.name}`"
            class="w-full h-full object-cover grayscale" loading="lazy" @error="handleImageError">

        <!-- would typically add a placeholder image or improved visual here -->
        <div v-else class="text-center p-4">
            <p class="text-xs mt-2 text-gray-500">Photo failed to load.</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TeamMember } from '@/types/team';

defineProps<{
    member: TeamMember
}>();

defineEmits<{
    selectMember: [member: TeamMember]
}>();

const imageLoadError = ref(false);

const handleImageError = () => {
    imageLoadError.value = true;
};
</script>