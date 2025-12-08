<template>
    <div v-if="member" @click="close"
        class="fixed inset-0 z-[100] bg-opacity-70 flex items-center justify-center transition-opacity duration-300">

        <div @click.stop
            class="bg-white p-6 w-full h-full md:w-1/2 md:h-auto md:max-w-lg md:rounded-lg overflow-y-auto">

            <div class="flex justify-between items-center border-b mb-4">
                <h3 class="text-xl"><span class="font-bold">Meet, </span>{{ member.name }}!</h3>
                <button @click="close" class="text-3xl text-gray-500 hover:text-black">&times;</button>
            </div>

            <PaginationControls class="mt-6 md:hidden   " @previous="close" @next="close" />

            <div class="md:flex md:space-x-4">
                <div class="mb-4 md:mb-0 md:w-2/5 flex-shrink-0 flex items-center justify-center bg-gray-200 shadow-lg">

                    <img v-if="!modalImageLoadError" :src="member.photoUrlColor" :alt="member.name"
                        class="w-full h-auto object-cover" @error="handleModalImageError">

                    <!-- would typically add a placeholder image or improved visual here -->
                    <div v-else class="text-center p-8">
                        <p class="text-sm mt-2 text-gray-500">Photo unavailable.</p>
                    </div>
                </div>

                <div class="md:w-3/5">
                    <p class="font-bold text-lg pb-1 mb-2">{{ member.title }}</p>
                    <p class="text-gray-700 text-sm">{{ member.bio }}</p>
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