<template>
    <div>
        <div class="mx-10 flex gap-4 items-center text-2xl font-bold text-[#2B2B2B]">
            <img class="w-8 mt-1" src="/icons/landing/video.svg" alt="video">
            پرامتیاز ترین تجربه های آموزش
        </div>

        <div class="mx-10 h-[0.125rem] bg-[#26C3C2] rounded-full mt-5"></div>

        <div class="flex gap-5 px-10 mt-5 flex-wrap justify-center">
            <LandingVideoFrame :score="4.7" url="/images/landing/video1.png">تجربه آموزش مثلثات با استفاده از اشکال</LandingVideoFrame>
            <LandingVideoFrame :score="4.6" url="/images/landing/video2.png" color="2">آموزش الهی نامه پایه دهم</LandingVideoFrame>
        </div>
    </div>
</template>