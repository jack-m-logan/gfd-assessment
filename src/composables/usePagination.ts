import type { TeamMember } from "@/types/team";
import { computed, ref, watch, type Ref } from "vue";

// GFD tiles
const gTile: TeamMember = { id: 'gfd-g', name: 'G' };
const fTile: TeamMember = { id: 'gfd-f', name: 'F' };
const dTile: TeamMember = { id: 'gfd-d', name: 'D' };

export function usePagination(
    teamMembers: Ref<TeamMember[]>,
    membersPerPage: Ref<number>
) {
    const currentPage = ref(1);

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

    return {
        paginatedMembers,
        currentPage,
        totalPages,
        nextPage,
        prevPage
    };
}