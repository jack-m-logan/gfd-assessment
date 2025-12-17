<template>
    <section class="p-4 md:p-12">
        <div class="max-w-[1440px] mx-auto">
            <h2 class="border-b-1 pb-2 mb-6">Our Team</h2>

            <div class="relative min-h-64">
                <PaginationControls @previous="prevPage" @next="nextPage" :disable-prev="currentPage === 1"
                    :disable-next="currentPage === totalPages" />

                <div v-if="isLoading" class="text-center py-10 text-gray-500">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <TeamGallerySkeleton v-for="n in membersPerPage" :key="n" />
                    </div>
                </div>

                <div v-else-if="error">
                    <HandleError :message="error" :callback="loadTeam" />
                </div>

                <!-- TODO maintain height to prevent layout shift -->
                <TeamGallery v-else :team-members="paginatedMembers" @select-member="setSelectedMember" />

                <TeamMemberModal :member="selectedMember" :close="clearSelectedMember" :next="goToNextMember"
                    :prev="goToPrevMember" :disable-next="isLastMember" :disable-prev="isFirstMember" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useBreakpoint } from '@/composables/useBreakpoint';
import HandleError from '@/components/ErrorHandling/HandleError.vue';
import TeamGallery from '@/components/TeamGallery/TeamGallery.vue';
import PaginationControls from '@/components/Navigation/PaginationControls.vue';
import TeamMemberModal from '@/components/TeamGallery/TeamMemberModal.vue';
import TeamGallerySkeleton from '@/components/TeamGallery/TeamGallerySkeleton.vue';
import { useTeamData } from '@/composables/useTeamData';
import { usePagination } from '@/composables/usePagination';
import { useTeamModal } from '@/composables/useTeamModal';

const { membersPerPage } = useBreakpoint();

const {
    loadTeam,
    isLoading,
    error,
    teamMembers
} = useTeamData();

const {
    paginatedMembers,
    currentPage,
    totalPages,
    nextPage,
    prevPage
} = usePagination(teamMembers, membersPerPage);

const {
    selectedMember,
    setSelectedMember,
    clearSelectedMember,
    goToNextMember,
    goToPrevMember,
    isFirstMember,
    isLastMember
} = useTeamModal(teamMembers);

onMounted(loadTeam);

// prevent scrolling when modal is open
watch(selectedMember, (newMember) => {
    if (newMember) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
}, { immediate: true }); 
</script>