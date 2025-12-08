import { ref, onMounted, onUnmounted, computed } from 'vue';

const screens = {
    sm: 640,
    md: 768,
    lg: 1024,
};

type BreakpointKey = 'default' | 'sm' | 'md' | 'lg';

const pageSizes: Record<BreakpointKey, number> = {
    default: 6,
    sm: 9,
    md: 12,
    lg: 15
};

export function useBreakpoint() {
    const currentBreakpoint = ref<BreakpointKey>('default');

    const checkBreakpoint = () => {
        const width = window.innerWidth;
        if (width >= screens.lg) {
            currentBreakpoint.value = 'lg';
        } else if (width >= screens.md) {
            currentBreakpoint.value = 'md';
        } else if (width >= screens.sm) {
            currentBreakpoint.value = 'sm';
        } else {
            currentBreakpoint.value = 'default';
        }
    };

    onMounted(() => {
        window.addEventListener('resize', checkBreakpoint);
        
        checkBreakpoint();
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkBreakpoint);
    });

    const membersPerPage = computed(() => {
        return pageSizes[currentBreakpoint.value];
    });

    return { membersPerPage };
}