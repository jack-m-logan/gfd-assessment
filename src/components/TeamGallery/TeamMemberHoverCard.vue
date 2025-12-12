<template>
    <div class="absolute inset-0 flex flex-col justify-between">
        <div class="absolute bg-bg-secondary top-0 left-0 w-full z-10">
            <p class="p-2 m-2 text-text-secondary text-sm italic">{{ member.title }}</p>
        </div>
        <img v-if="!imageError" :src="member.photoUrlColor" :alt="member.name" @error="handleImageError"
            class="mb-2 h-full object-cover">

        <!-- TODO use a placeholder image here -->
        <div v-else class="w-full h-full flex items-center justify-center bg-bg-variation">
            <p class="text-xs">Photo failed to load.</p>
        </div>
        <div class="absolute flex row justify-end bottom-0 left-0 w-full text-center p-1 z-10">
            <div class="inline-block border-b-1 m-2" :class="imageError ? 'border-black' : 'border-white'">
                <button class="flex row justify-self-end hover:cursor-pointer"
                    :class="imageError ? 'text-text-primary' : 'text-text-secondary'">
                    View Profile

                    <div class="flex row align-self-center">
                        <img src="@/assets/icons/arrow-top-right.png" alt="An arrow pointing to the top right"
                            class="ml-2 h-5 w-5 object-cover align-self-center" loading="lazy">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types/team';
import { ref, watch } from 'vue';

const props = defineProps<{
    member: TeamMember
}>();

const imageError = ref(false);

const handleImageError = () => {
    imageError.value = true;
};

watch(() => props.member, () => {
    imageError.value = false;
});
</script>