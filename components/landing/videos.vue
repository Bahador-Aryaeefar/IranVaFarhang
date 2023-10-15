<template>
    <div>
        <div class="flex gap-4 items-center text-2xl font-bold text-[#2B2B2B]">
            <img class="w-8 mt-1" src="/icons/landing/video.svg" alt="video">
            پرامتیاز ترین تجربه های آموزش
        </div>

        <div class="h-[0.125rem] bg-[#26C3C2] rounded-full mt-5"></div>

        <div
            class="flex gap-5 mt-5 px-10 mobile:px-6 -mx-10 mobile:-mx-6 flex-wrap justify-center mobile:flex-nowrap mobile:justify-start mobile:overflow-auto hideScroll pb-10">
            <LandingVideoFrame :score="4.7" url="/images/landing/video1.png">تجربه آموزش مثلثات با استفاده از اشکال</LandingVideoFrame>
            <LandingVideoFrame :score="4.6" url="/images/landing/video2.png" color="2">آموزش الهی نامه پایه دهم</LandingVideoFrame>
            <LandingVideoFrame :score="4.7" url="/images/landing/video1.png">تجربه آموزش مثلثات با استفاده از اشکال</LandingVideoFrame>
            <LandingVideoFrame :score="4.6" url="/images/landing/video2.png" color="2">آموزش الهی نامه پایه دهم</LandingVideoFrame>
            <LandingVideoFrame :score="4.7" url="/images/landing/video1.png">تجربه آموزش مثلثات با استفاده از اشکال</LandingVideoFrame>
        </div>
    </div>
</template>