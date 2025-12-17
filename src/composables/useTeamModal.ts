import type { TeamMember } from "@/types/team";
import { computed, ref, type Ref } from "vue";

export function useTeamModal(teamMembers: Ref<TeamMember[]>) {
    const selectedMember = ref<TeamMember | null>(null);

    const setSelectedMember = (member: TeamMember) => {
        selectedMember.value = member;
    };

    const clearSelectedMember = () => {
        selectedMember.value = null;
    };

    // modal navigation
    const goToNextMember = () => {
        if (!teamMembers.value.length || !selectedMember.value) return; // error handling eg toast

        const currentIndex = teamMembers.value.findIndex(m => m.id === selectedMember.value!.id);
        
        // check if the current member was found and is not the last
        if (currentIndex >= 0 && currentIndex < teamMembers.value.length - 1) {
            selectedMember.value = teamMembers.value[currentIndex + 1] as TeamMember;
        }
    };

    const goToPrevMember = () => {
        if (!teamMembers.value.length || !selectedMember.value) return; // error handling eg toast

        const currentIndex = teamMembers.value.findIndex(m => m.id === selectedMember.value!.id);
        
        // check if the current member was found and is not the first
        if (currentIndex > 0) {
            selectedMember.value = teamMembers.value[currentIndex - 1] as TeamMember;
        }
    };


    const isFirstMember = computed(() => {
        return teamMembers.value.findIndex(m => m.id === selectedMember.value?.id) === 0;
    });

    const isLastMember = computed(() => {
        return teamMembers.value.findIndex(m => m.id === selectedMember.value?.id) === teamMembers.value.length - 1;
    });

    return {
        selectedMember,
        setSelectedMember,
        clearSelectedMember,
        goToNextMember,
        goToPrevMember,
        isFirstMember,
        isLastMember
    };
}