<template>
    <section class="p-4 md:p-12">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl border-b-2 pb-2 mb-6">Our Team</h2>

            <div class="relative min-h-64">
                <PaginationControls @previous="prevPage" @next="nextPage" :disable-prev="currentPage === 1"
                    :disable-next="currentPage === totalPages" />

                <div v-if="isLoading" class="text-center py-10 text-gray-500">
                    <!-- TODO replace with skeleton loader -->
                    <p>Loading team members...</p>
                </div>

                <div v-else-if="error">
                    <HandleError :message="error" :callback="loadTeam" />
                </div>

                <!-- TODO maintain height to prevent layout shift -->
                <!-- TODO add GFD tiles when grid is 5 x 3  -->
                <TeamGallery v-else :team-members="paginatedMembers" @select-member="setSelectedMember" />
                <TeamMemberModal :member="selectedMember" :close="clearSelectedMember" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useTeamApi } from '@/composables/useTeamApi';
import { useBreakpoint } from '@/composables/useBreakpoint';
import HandleError from '@/components/ErrorHandling/HandleError.vue';
import TeamGallery from '@/components/TeamGallery/TeamGallery.vue';
import PaginationControls from '@/components/Navigation/PaginationControls.vue';
import TeamMemberModal from '@/components/TeamGallery/TeamMemberModal.vue';

const { membersPerPage } = useBreakpoint();

const {
    isLoading,
    error,
    loadTeam,
    paginatedMembers,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    selectedMember,
    clearSelectedMember,
    setSelectedMember
} = useTeamApi(membersPerPage);

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