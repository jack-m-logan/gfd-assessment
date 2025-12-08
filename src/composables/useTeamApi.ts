import { computed, ref, watch, type Ref } from 'vue';
import type { TeamMember } from '@/types/team';
import { mockTeamData } from '@/data/teamMembers';

export function useTeamApi(membersPerPage: Ref<number>) {
    const teamMembers = ref<TeamMember[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const currentPage = ref(1);

    // reset when page is resized
    watch(membersPerPage, () => {
      currentPage.value = 1;
    });

    const totalPages = computed(() => {
        if (membersPerPage.value === 0) return 1;
        
        return Math.ceil(teamMembers.value.length / membersPerPage.value);
    });

    const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * membersPerPage.value,
            end = start + membersPerPage.value;

        return teamMembers.value.slice(start, end);
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

    return {
        teamMembers,
        isLoading,
        error,
        loadTeam,
        paginatedMembers,
        currentPage,
        totalPages,
        nextPage,
        prevPage
    };
}