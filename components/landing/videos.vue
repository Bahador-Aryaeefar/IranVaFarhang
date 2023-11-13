<template>
    <div>
        <div class="flex gap-4 items-center text-2xl font-bold text-[#2B2B2B]">
            <img class="w-8 mt-1" src="/icons/landing/video.svg" alt="video">
            پرامتیاز ترین تجربه های آموزش
        </div>

        <div class="h-[0.125rem] bg-[#26C3C2] rounded-full mt-5"></div>

        <div
            class="flex gap-5 mt-5 px-10 mobile:px-6 -mx-10 mobile:-mx-6 flex-wrap justify-center mobile:flex-nowrap mobile:justify-start mobile:overflow-auto hideScroll pb-10">
            <LandingVideoFrame v-for="item in works?.mostExperiences?.value" :url="`https://api.37pajoohesh.ir/images/${item.file_image}`" :to="`/books/${item.id}`" :score="item.status">{{item.name}}</LandingVideoFrame>
        </div>
    </div>
</template>

<script setup>
const works = useWorks()
works.getMostExperiences()
</script>