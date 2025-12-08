<template>
    <div class="absolute bottom-0 left-[-2%] w-fit-content origin-bottom-left"
        :style="{ transform: `scale(${scale})` }">

        <!-- bed/sky light image -->
        <div class="absolute bottom-0 left-0 w-[8.5rem] h-[13.75rem] rotate-357 
                border-4 border-white shadow-xl overflow-hidden z-20">
            <img src="@/assets/images/optimised/our-story-bed-center.webp" class="h-full w-[150%] object-cover"
                alt="Bedroom with sky visible through roof light">
        </div>

        <!-- white blind -->
        <img src="@/assets/images/optimised/our-story-white-blackout-closed.webp" class="absolute bottom-[-3rem] left-[7rem] w-[7.125rem] h-[12.5rem] max-w-none rotate-9
                border-4 border-white shadow-xl z-10" alt="White blackout blind">

        <!-- grey blind -->
        <img src="@/assets/images/optimised/our-story-blind-grey.webp" class="absolute bottom-[-6.5rem] left-[9rem] w-[7.125rem] h-[12.5rem] max-w-none rotate-9
                border-4 border-white shadow-xl z-30" alt="Grey iBlind">

        <!-- antique oak -->
        <img src="@/assets/images/optimised/our-story-antique-oak-seatch.webp" class="absolute bottom-[-6rem] left-[-4rem] w-[14.5rem] h-auto max-w-none rotate-252
                border-4 border-white shadow-xl z-10" alt="Antique oak door material">
    </div>
</template>

<script setup lang="ts">
defineProps({
    scale: {
        type: Number,
        default: 1
    }
})
</script>