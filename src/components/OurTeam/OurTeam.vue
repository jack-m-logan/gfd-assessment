<template>
    <section class="p-4 md:p-12">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl border-b border-gray-300 pb-2 mb-6">Our Team</h2>

            <div class="relative min-h-64">
                <div v-if="isLoading" class="text-center py-10 text-gray-500">
                    <p>Loading team members...</p>
                </div>

                <div v-else-if="error">
                    <HandleError :message="error" :callback="loadTeam" />
                </div>

                <TeamGallery v-else :team-members="teamMembers" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTeamApi } from '@/composables/useTeamApi';
import HandleError from '@/components/ErrorHandling/HandleError.vue';
import TeamGallery from '@/components/TeamGallery/TeamGallery.vue';

const { teamMembers, isLoading, error, loadTeam } = useTeamApi();

onMounted(loadTeam);
</script>