<template>
    <section class="relative bg-bg-secondary h-screen max-h-[1000px] overflow-clip hidden md:block">
        <div class="absolute h-full w-full top-0 left-0">
            <div class="h-full w-[45%] bg-bg-primary"></div>
        </div>

        <div class="relative w-full h-full max-w-[1440px] mx-auto py-20">

            <img src="@/assets/images/optimised/our-story-hero-interior.webp" class="absolute border-6 border-white shadow-xl z-40 
                       top-[15%] md:right-0 lg:right-0 w-[45vw] max-w-[35rem] min-w-[27rem]"
                alt="Bi-fold doors interior">

            <div class="grid grid-cols-1 grid-rows-1 justify-items-center items-center px-4">

                <img src="@/assets/images/optimised/our-story-thatched-cottage.webp" class="col-span-full row-span-full mr-20 w-[75vw] min-w-4xl max-w-5xl h-auto grayscale z-10 
                           justify-self-end md:-mt-8 lg:-mt-12 xl:-mt-10" alt="Exterior of a thatched cottage">
                <div class="col-span-full row-span-full w-[80%] max-w-4xl bg-bg-primary p-8 lg:p-12 shadow-2xl z-30 
                            justify-self-center align-self-start -translate-x-[15%] -translate-y-[-10%]
                            
                            md:w-[75%] md:-mt-20
                            lg:w-[70%] lg:-mt-20
                            xl:w-[60%] xl:-mt-44">
                    <div class="flex flex-col justify-start md:w-[85%] lg:w-[90%] xl:w-full pr-36">
                        <h1 class="mb-6 border-b-1">Our Story</h1>

                        <p class="md:text-sm md:font-normal lg:text-lg lg:font-semibold pb-6">
                            Coming from a lifelong background in the double glazing industry,
                            we began trading online in 2008. Our core product offering was
                            composite doors, and we were one of the first companies in the UK
                            to pioneer online ordering for this product.
                        </p>
                        <p class="md:text-sm md:font-normal lg:text-lg lg:font-semibold pb-4">
                            Over the past 15 years, we have expanded our portfolio of
                            products across a range of composite, aluminium, uPVC and
                            security products. Our goal was always to offer a complete
                            home improvement solution, which we now carry out nationwide
                            through GFD Homes.
                        </p>
                    </div>
                </div>
            </div>

            <OurStoryLeftCollage
                class="absolute md:hidden lg:block top-0 left-0 z-10 transform -translate-x-1/2 md:translate-y-8 lg:translate-y-12" />

            <OurStoryProductCollage :scale="1.3"
                class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-1/4 z-10" />

            <OurStoryOfficeDoorCollage
                class="absolute bottom-0 right-0 z-50 transform translate-x-1/4 translate-y-1/4" />

        </div>
    </section>
</template>

<script setup lang="ts">
import OurStoryProductCollage from './OurStoryProductCollage.vue';
import OurStoryOfficeDoorCollage from './OurStoryOfficeDoorCollage.vue';
import OurStoryLeftCollage from './OurStoryLeftCollage.vue';
</script>