<template>
    <section class="bg-bg-primary overflow-hidden">
        <div class="relative bg-bg-variation shadow-xl pb-10 mb-10">
            <div class="relative w-[60%] max-w-[30rem] left-0 bg-bg-primary 
                    flex items-center px-6 md:px-12 py-10">
                <h2 class="mb-0">Company<br> Values & Ethos</h2>
            </div>

            <OfficeImages class="absolute top-[-2rem] right-[-50%] z-20" />
        </div>

        <div class="flex justify-start py-6">
            <div class="flex w-[90%] max-w-lg">
                <img src="@/assets/images/optimised/values-ethos-first-row-4.webp" class="w-1/2 shadow-xl"
                    alt="Exterior of a home" loading="lazy">

                <img src="@/assets/images/optimised/values-ethos-first-row-5.webp" class="w-1/2 shadow-xl"
                    alt="Home interior with bi-fold doors and a fireplace" loading="lazy">
            </div>
        </div>

        <div class="w-full bg-bg-secondary p-6 md:p-12">
            <p class="text-text-secondary">
                We know that our continued success is down to our customers,
                and treating them with respect. Starting from humble beginnings
                means that we value each and every customer equally, regardless
                of the order size.
            </p>
        </div>

        <div class="flex justify-end py-6">
            <div class="flex w-[90%] max-w-lg">
                <img src="@/assets/images/optimised/values-ethos-second-row-1.webp" class="w-1/2 shadow-xl"
                    alt="A doorway and entry to a home" loading="lazy">

                <img src="@/assets/images/optimised/values-ethos-second-row-2.webp" class="w-1/2 shadow-xl"
                    alt="Home exterior with a green door" loading="lazy">
            </div>
        </div>

        <div class="w-full bg-bg-secondary p-6 md:p-12">
            <p class="text-text-secondary">
                As the world becomes more automated by the day, we promise never
                to lose the personal touch with our customers that we built the
                foundations of the business on. Our staff are friendly, knowledgeable
                and always happy to assist.
            </p>
        </div>

    </section>
</template>

<script setup lang="ts">
import OfficeImages from '../OurStory/OfficeImages.vue';
</script>