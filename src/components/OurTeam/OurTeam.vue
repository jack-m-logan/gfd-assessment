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

                <div v-else>
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="member in teamMembers" :key="member.id"
                            class="aspect-square bg-gray-200 flex items-center justify-center border">
                            {{ member.name }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTeamApi } from '@/composables/useTeamApi';
import HandleError from '@/components/ErrorHandling/HandleError.vue';

const { teamMembers, isLoading, error, loadTeam } = useTeamApi();

onMounted(loadTeam);
</script>