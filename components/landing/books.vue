<template>
    <div>
        <div class="mx-10 flex gap-4 items-center text-2xl font-bold">
            <img class="w-8 mt-1" src="/icons/landing/star.svg" alt="star">
            پر امتیازترین کتاب ها
        </div>

        <div class="mx-10 h-[0.125rem] bg-[#26C3C2] rounded-full mt-5"></div>

        <div class="flex gap-3 px-10 mt-3 flex-wrap justify-center">
            <LandingBookFrame :score="4.8" url="/images/landing/book1.png">درمان اختلالات ریاضی</LandingBookFrame>
            <LandingBookFrame :score="4.7" url="/images/landing/book2.png">شادترین کودک محله</LandingBookFrame>
            <LandingBookFrame :score="4.6" url="/images/landing/book3.png">این راهش نیست</LandingBookFrame>
            <LandingBookFrame :score="4.6" url="/images/landing/book4.png">وضعیت آخر</LandingBookFrame>
        </div>
    </div>
</template>