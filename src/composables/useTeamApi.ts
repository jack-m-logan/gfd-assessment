import { ref } from 'vue';
import type { TeamMember } from '@/types/team';
import { mockTeamData } from '@/data/teamMembers';

export const useTeamApi = () => {
  const teamMembers = ref<TeamMember[]>([]), 
    isLoading = ref(false),
    error = ref<string | null>(null);

  const loadTeam = async () => {
    isLoading.value = true;
    error.value = null;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      teamMembers.value = mockTeamData;
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
};