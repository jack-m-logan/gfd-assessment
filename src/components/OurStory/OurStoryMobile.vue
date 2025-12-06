<template>
    <section class="relative min-h-screen bg-bg-secondary">
        <!-- background white block -->
        <div class="absolute h-[33%] w-full top-0 left-0 bg-bg-variation">
        </div>

        <img src="@/assets/images/optimised/our-story-thatched-cottage.webp"
            class="absolute top-[20%] left-[6%] w-[42.75rem] max-w-none h-auto grayscale z-1"
            alt="Exterior of a thatched cottage">

        <img src="@/assets/images/optimised/our-story-hero-interior.webp" class="absolute top-3 right-[-10%] w-[16.25rem] 
                  border-6 border-white shadow-xl z-10" alt="Bi-fold doors interior">

        <div class="absolute w-[76%] max-w-[20rem] min-w-[12.5rem] 
                    h-fit-content top-[28%] z-100 left-[2%] bg-bg-primary p-4">
            <h1 class="mb-6 border-b-2 border-red pb-4">Our Story</h1>

            <p class="mb-6">
                Coming from a lifelong background in the double glazing industry,
                we began trading online in 2008. Our core product offering was
                composite doors, and we were one of the first companies in the UK
                to pioneer online ordering for this product.
            </p>
        </div>

        <div class="absolute bottom-0 left-[-2%] w-fit-content border-1 border-red-500">
            <!-- bed/sky light image, contained within a div to allow overflow hidden -->
            <div class="absolute bottom-0 left-0 w-[8.5rem] h-[13.75rem] rotate-357 
                        border-4 border-white shadow-xl overflow-hidden z-20">
                <img src="@/assets/images/optimised/our-story-bed-center.webp" class="h-full w-[150%] object-cover"
                    alt="Bedroom with sky visible through roof light">
            </div>

            <!-- white blind -->
            <img src="@/assets/images/optimised/our-story-white-blackout-closed.webp" class="absolute bottom-[-3rem] left-[7rem] w-[7.125rem] h-[12.5rem] max-w-none rotate-9
                border-4 border-white shadow-xl z-10" alt="While blackout blind">

            <!-- grey blind -->
            <img src="@/assets/images/optimised/our-story-blind-grey.webp" class="absolute bottom-[-6.5rem] left-[9rem] w-[7.125rem] h-[12.5rem] max-w-none rotate-9
                border-4 border-white shadow-xl z-30" alt="Grey iBlind">

            <!-- antique oak img -->
            <img src="@/assets/images/optimised/our-story-antique-oak-seatch.webp" class="absolute bottom-[-6rem] left-[-4rem] w-[14.5rem] h-auto max-w-none rotate-252
                border-4 border-white shadow-xl z-10" alt="Antique oak door material">
        </div>
    </section>

    <section class="relative min-h-screen bg-bg-primary overflow-hidden">
        <div class="absolute w-[92%] max-w-[20rem] min-w-[12.5rem] 
                    h-fit-content top-[28%] z-50 right-0 bg-bg-variation p-4">
            <p class="mb-10">
                Over the past 15 years, we have expanded our portfolio of
                products across a range of composite, aluminium, uPVC and
                security products. Our goal was always to offer a complete
                home improvement solution, which we now carry out nationwide
                through GFD Homes.
            </p>
        </div>

        <img src="@/assets/images/optimised/our-story-office-building.webp" class="absolute bottom-[5rem] right-0 w-auto h-[15.5rem] max-w-none rotate-5
                border-4 border-white shadow-xl grayscale z-10" alt="Office building exterior">

        <img src="@/assets/images/optimised/our-story-green-door.webp" class="absolute bottom-[8rem] right-[6rem] w-auto h-[16rem] max-w-none rotate-5
                border-4 border-white shadow-xl z-100" alt="Office building exterior">
    </section>
</template>

<script setup lang="ts">

</script>