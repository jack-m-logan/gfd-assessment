<template>
    <div v-if="member" @click="close"
        class="fixed inset-0 z-[100] bg-opacity-70 flex items-center justify-center transition-opacity duration-300">

        <div @click.stop
            class="bg-white p-6 w-full h-full md:w-4/5 md:max-h-[95vh] md:max-w-[90vw] md:rounded-lg border-1 border-gray-300 shadow-xl overflow-y-auto">

            <div class="flex justify-between items-center border-b mb-4">
                <h2>Meet, <span class="font-normal">{{ member.name }}!</span></h2>
                <button @click="close" class="text-4xl text-gray-500 hover:text-black">&times;</button>
            </div>

            <PaginationControls class="mt-6" @previous="close" @next="close" />

            <div class="max-w-md mx-auto">
                <div class="mb-6 mt-6 flex justify-center">
                    <div class="relative w-40 h-auto md:w-48 md:h-auto pt-4">
                        <div
                            class="absolute inset-0 bg-bg-secondary z-0 transform -translate-x-2 -translate-y-2 md:-translate-x-4 md:-translate-y-4">
                        </div>

                        <div
                            class="relative w-full h-full z-10 overflow-hidden shadow-lg transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4">
                            <img v-if="!modalImageLoadError" :src="member.photoUrlColor" :alt="member.name"
                                class="w-full h-full object-cover" @error="handleModalImageError">

                            <div v-else class="w-full h-full flex items-center justify-center bg-gray-300">
                                <p>Photo unavailable.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <h2 class="border-b pb-1 mb-2">{{ member.title }}</h2>
                    <p class="text-justify">{{ member.bio }}</p>
                    <PaginationControls class="hidden mt-6" @previous="close" @next="close" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TeamMember } from '@/types/team';
import PaginationControls from '../Navigation/PaginationControls.vue';

const props = defineProps<{
    member: TeamMember | null;
    close: () => void;
}>();

const modalImageLoadError = ref(false);

const handleModalImageError = () => {
    modalImageLoadError.value = true;
};

watch(() => props.member, () => {
    modalImageLoadError.value = false;
});
</script>