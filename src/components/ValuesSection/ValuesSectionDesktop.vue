<template>
    <section class="relative bg-bg-variation overflow-hidden hidden md:block pt-20">
        <div class="absolute h-full w-full top-0 left-0">
            <div class="h-[45%] shadow-xl bg-bg-primary"></div>
        </div>

        <div class="relative w-full max-w-[1440px] mx-auto px-4 overflow-x-clip">
            <div class="grid grid-cols-12 gap-8">
                <div class="relative col-span-12 md:col-span-4">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="w-full col-span-1 md:col-start-2 lg:col-start-1">
                            <h2 class="mb-0 whitespace-nowrap">Company<br> Values & Ethos</h2>
                        </div>

                        <OfficeImages
                            class="absolute md:top-[10rem] lg:top-[15rem] md:right-[20%] lg:right-[6rem] z-10" />

                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[160px] md:w-[200px] overflow-visible">
                            <img src="@/assets/images/optimised/values-ethos-cottage.webp"
                                class="w-full h-full object-cover object-center shadow-xl"
                                alt="Exterior of a cottage with a blue door" loading="lazy">
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-8 p-8">
                    <div class="flex flex-col gap-4">
                        <div class="h-[150px] md:h-[180px] lg:h-[200px]">
                            <div class="flex flex-row h-full">
                                <img src="@/assets/images/optimised/values-ethos-first-row-1.webp"
                                    class="h-full w-auto object-cover shadow-xl" alt="A man walking into a house"
                                    loading="lazy">
                                <img src="@/assets/images/optimised/our-story-bed-center.webp"
                                    class="h-full w-auto object-cover shadow-xl"
                                    alt="A bed with a large skylight above it" loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-first-row-3.webp"
                                    class="h-full w-auto object-cover shadow-xl" alt="A blue door on an elegant home"
                                    loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-first-row-4.webp"
                                    class="h-full w-auto object-cover shadow-xl" alt="External view of a home"
                                    loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-first-row-5.webp"
                                    class="h-full w-auto object-cover shadow-xl"
                                    alt="Interior view of a home with large windows" loading="lazy">
                            </div>
                        </div>
                        <div class="h-[175px] md:h-[200px] lg:h-[220px]">
                            <div class="flex flex-row h-full">
                                <img src="@/assets/images/optimised/values-ethos-second-row-1.webp"
                                    class="h-full w-auto object-cover shadow-xl" alt="A home entry with lot of plants"
                                    loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-second-row-2.webp"
                                    class="h-full w-auto object-cover shadow-xl"
                                    alt="Exterior of a home with large windows" loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-second-row-3.webp"
                                    class="h-full w-auto object-cover shadow-xl"
                                    alt="Kitchen interior with a large window and table" loading="lazy">
                                <img src="@/assets/images/optimised/values-ethos-second-row-4.webp"
                                    class="h-full w-auto object-cover shadow-xl" alt="Exterior of a modern home"
                                    loading="lazy">
                            </div>
                        </div>
                        <div class="flex items-center justify-center py-8 border-b-1">
                            <div>
                                <p class="mb-4">We know that our continued success is down to our customers, and
                                    treating them with
                                    respect. Starting from humble beginnings means that we value each and every customer
                                    equally, regardless of the order size.</p>
                                <p>As the world becomes more automated by the day, we promise never to lose the personal
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
import OfficeImages from '../OurStory/OfficeImages.vue';
</script>