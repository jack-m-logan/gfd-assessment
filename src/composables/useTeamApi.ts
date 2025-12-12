import { computed, ref, watch, type Ref } from 'vue';
import type { TeamMember } from '@/types/team';
import { mockTeamData } from '@/data/teamMembers';

// GFD tiles
const gTile: TeamMember = { id: 'gfd-g', name: 'G' };
const fTile: TeamMember = { id: 'gfd-f', name: 'F' };
const dTile: TeamMember = { id: 'gfd-d', name: 'D' };

export function useTeamApi(membersPerPage: Ref<number>) {
    const teamMembers = ref<TeamMember[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const currentPage = ref(1);

    // fetch mock team data
    const loadTeam = async () => {
        isLoading.value = true;
        error.value = null;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            
            teamMembers.value = [...mockTeamData]; 
        } catch (err) {
            error.value = 'Failed to fetch team data';
            console.error('API failed to return team data:', err);
        } finally {
            isLoading.value = false;
        }
    };

    watch(membersPerPage, () => {
        currentPage.value = 1;
    });

    const shouldShowGfdTiles = computed(() => membersPerPage.value === 15);

    const totalPages = computed(() => {
        if (membersPerPage.value === 0) return 1;
        
        // only show 12 members if showing GFD tiles
        const effectiveMembersPerPage = shouldShowGfdTiles.value 
            ? membersPerPage.value - 3 
            : membersPerPage.value;
        
        return Math.ceil(teamMembers.value.length / effectiveMembersPerPage);
    });

    const paginatedMembers = computed(() => {
        const effectiveMembersPerPage = shouldShowGfdTiles.value 
            ? membersPerPage.value - 3 
            : membersPerPage.value;
        
        const start = (currentPage.value - 1) * effectiveMembersPerPage;
        const end = start + effectiveMembersPerPage;

        const members = teamMembers.value.slice(start, end);

        if (shouldShowGfdTiles.value && members.length === 12) {
            return [
                members[0],
                gTile,
                ...members.slice(1, 6),
                fTile,
                ...members.slice(6, 11),
                dTile,
                members[11]
            ];
        }

        return members;
    });

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    // open modal
    const selectedMember = ref<TeamMember | null>(null);

    const setSelectedMember = (member: TeamMember) => {
        // don't open modal for GFD tiles
        if (member.id.toString().startsWith('gfd-')) return;
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
        teamMembers,
        isLoading,
        error,
        loadTeam,
        paginatedMembers,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        setSelectedMember,
        clearSelectedMember,
        selectedMember,
        goToNextMember,
        goToPrevMember,
        isFirstMember,
        isLastMember
    };
}