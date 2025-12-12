<template>
    <div @click="$emit('selectMember', member)" :class="[isGfdTile ? 'cursor-default shadow-xl' : 'cursor-pointer']"
        class="group relative aspect-[3/4] overflow-hidden">

        <!-- render GFD tiles -->
        <div v-if="isGfdTile"
            class="absolute inset-0 flex items-center justify-center bg-bg-primary text-text-primary italic font-bold gfd-tiles shadow-xxl">
            {{ member.name }}
        </div>

        <!-- normal team member card -->
        <div v-else
            class="relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
            <div class="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-200">
                <img v-if="!imageLoadError" :src="member.photoUrlBw" :alt="`Photo of ${member.name}`"
                    class="w-full h-full object-cover grayscale" loading="lazy" @error="handleImageError">

                <div v-else class="text-center p-4">
                    <p class="text-xs mt-2">Photo failed to load.</p>
                </div>
            </div>

            <div class="absolute inset-0 backface-hidden transform rotate-y-180">
                <TeamMemberHoverCard :member="member" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TeamMember } from '@/types/team';
import TeamMemberHoverCard from './TeamMemberHoverCard.vue';

defineProps<{
    member: TeamMember;
    isGfdTile?: boolean;
}>();

defineEmits<{
    selectMember: [member: TeamMember]
}>();

const imageLoadError = ref(false);

const handleImageError = () => {
    imageLoadError.value = true;
};
</script>

<style scoped>
.transform-style-3d {
    transform-style: preserve-3d;
}

.backface-hidden {
    backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}
</style>