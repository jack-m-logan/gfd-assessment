<template>
    <!-- Our Story -->
    <section class="relative min-h-screen bg-bg-secondary overflow-x-clip">
        <!-- background white block -->
        <div class="absolute h-[33%] w-full top-0 left-0 bg-bg-variation">
        </div>

        <div class="absolute top-[20%] left-[6%]">
            <img src="@/assets/images/optimised/our-story-thatched-cottage.webp"
                class="w-[213vw] max-w-none h-auto grayscale z-1" alt="Exterior of a thatched cottage">
        </div>

        <img src="@/assets/images/optimised/our-story-hero-interior.webp"
            class="absolute top-3 right-[-10%] w-[81vw] border-6 border-white shadow-xl z-10 md:max-w-80 min-w-2xs"
            alt="Bi-fold doors interior">

        <div class="absolute w-[75vw] max-w-[20rem] min-w-[12.5rem] 
                    h-fit-content top-[28%] z-100 left-[2%] bg-bg-primary p-4">
            <h1 class="mb-6 border-b-2 pb-4">Our Story</h1>

            <p class="mb-6">
                Coming from a lifelong background in the double glazing industry,
                we began trading online in 2008. Our core product offering was
                composite doors, and we were one of the first companies in the UK
                to pioneer online ordering for this product.
            </p>
        </div>

        <OurStoryProductCollage :scale="1"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50" />
    </section>

    <!-- Our Story continued -->
    <section class="relative min-h-screen bg-bg-primary overflow-x-clip">
        <div class="absolute w-[92vw] max-w-[20rem] min-w-[12.5rem] 
                    h-fit-content top-[28%] z-50 right-0 bg-bg-variation p-4">
            <p class="mb-10">
                Over the past 15 years, we have expanded our portfolio of
                products across a range of composite, aluminium, uPVC and
                security products. Our goal was always to offer a complete
                home improvement solution, which we now carry out nationwide
                through GFD Homes.
            </p>
        </div>

        <OurStoryOfficeDoorCollage class="absolute bottom-0 right-0 z-50" />
    </section>
</template>

<script setup lang="ts">
import OurStoryProductCollage from './OurStoryProductCollage.vue';
import OurStoryOfficeDoorCollage from './OurStoryOfficeDoorCollage.vue';
</script>