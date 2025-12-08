<template>
    <div class="aspect-[3/4] bg-gray-200 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
        <img :src="member.photoUrl" :alt="`Photo of ${member.name}`" class="w-full h-full object-cover grayscale"
            loading="lazy">
    </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types/team';

defineProps<{
    member: TeamMember
}>();
</script>