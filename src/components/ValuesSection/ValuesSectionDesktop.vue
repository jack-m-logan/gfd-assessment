<template>
    <section class="relative bg-bg-variation overflow-hidden hidden md:block pt-20">
        <div class="absolute h-full w-full top-0 left-0">
            <div class="h-[45%] shadow-xl bg-bg-primary"></div>
        </div>

        <div class="relative w-full max-w-[1440px] mx-auto px-4 overflow-x-clip">
            <div class="grid grid-cols-12 gap-8">
                <div class="relative col-span-12 md:col-span-4">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="w-full col-span-1 pl-4 md:col-start-1 lg:col-start-1">
                            <h2 class="mb-0 whitespace-nowrap">Company<br> Values & Ethos</h2>
                        </div>

                        <OfficeImages
                            class="absolute md:hidden lg:block lg:top-[11rem] md:right-[20%] lg:right-[6rem] z-10" />

                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[160px] md:w-[200px] overflow-visible">
                            <img src="@/assets/images/optimised/values-ethos-cottage.webp"
                                class="w-full h-full object-cover object-center shadow-xl"
                                alt="Exterior of a cottage with a blue door" loading="lazy">
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-8 p-8">
                    <div class="flex flex-col gap-8">

                        <ImageRow :images="firstRowImages" height="h-[150px] md:h-[180px] lg:h-200px" />
                        <ImageRow :images="secondRowImages" height="h-[150px] md:h-[180px] lg:h-200px" />

                        <div class="flex items-center justify-center py-8 border-b-1">
                            <div>
                                <p class="md:text-sm md:font-normal lg:text-lg lg:font-semibold mb-4">We know that our
                                    continued success is down to our customers, and
                                    treating them with
                                    respect. Starting from humble beginnings means that we value each and every customer
                                    equally, regardless of the order size.</p>
                                <p class="md:text-sm md:font-normal lg:text-lg lg:font-semibold">As the world becomes
                                    more automated by the day, we promise never to lose the personal
                                    touch with our customers that we built the foundations of the business on. Our staff
                                    are friendly, knowledgeable and always happy to assist. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ImageRowImage } from '@/types/imageRowImage';
import OfficeImages from '../OurStory/OfficeImages.vue';
import ImageRow from './ImageRow.vue';

const firstRowImages: ImageRowImage[] = [
    {
        src: '/src/assets/images/optimised/values-ethos-first-row-1.webp',
        alt: 'A man walking into a house'
    },
    {
        src: '/src/assets/images/optimised/our-story-bed-center.webp',
        alt: 'A bed with a large skylight above it'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-first-row-3.webp',
        alt: 'A blue door on an elegant home'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-first-row-4.webp',
        alt: 'External view of a home'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-first-row-5.webp',
        alt: 'Interior view of a home with large windows'
    }
];

const secondRowImages: ImageRowImage[] = [
    {
        src: '/src/assets/images/optimised/values-ethos-second-row-1.webp',
        alt: 'A home entry with lot of plants'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-second-row-2.webp',
        alt: 'Exterior of a home with large windows'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-second-row-3.webp',
        alt: 'Kitchen interior with a large window and table'
    },
    {
        src: '/src/assets/images/optimised/values-ethos-second-row-4.webp',
        alt: 'Exterior of a modern home'
    }
];
</script>