import { mockTeamData } from "@/data/teamMembers";
import type { TeamMember } from "@/types/team";
import { ref } from "vue";

export function useTeamData() {
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const teamMembers = ref<TeamMember[]>([]);
    
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

    return {
        teamMembers,
        isLoading,
        error,
        loadTeam
    };
}