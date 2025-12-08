<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <TeamMemberCard v-for="member in teamMembers" :key="member.id" :member="member"
            @select-member="$emit('selectMember', $event)" />
    </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types/team';
import TeamMemberCard from './TeamMemberCard.vue';

defineProps<{
    teamMembers: TeamMember[]
}>();

defineEmits<{
    selectMember: [member: TeamMember]
}>();
</script>