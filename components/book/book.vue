<template>
    <div class="max-w-[50rem] mx-auto">
        <div class="bg-white rounded-[2rem] flex items-center justify-between mt-10 px-6">
            <div class="flex items-center gap-4 text-2xl text-[#212121] font-bold">
                <img class="w-[7rem] rounded-full border-[0.125rem] border-white shadow-md -my-4"
                    src="/images/landing/pro1.png" alt="profile">
                دکتر مصطفی تبریزی
            </div>

            <div class="flex items-center gap-2 text-2xl font-bold text-[#2D2D2D]">
                17
                <img class="h-10" src="/icons/books/pen.svg" alt="pen">
            </div>
        </div>

        <img class="mt-8 rounded-[2rem] shadow-md mx-auto w-full max-w-[20rem]" src="/images/books/book1.png" alt="book 1">

        <div class="mt-8 flex px-4 justify-between items-center">
            <div class="h-10 w-[12.5rem] mt-2" :style="`background: linear-gradient(90deg, #ffb400 ${score / 5 * 100}%, #e1e1e1 ${score / 5 * 100}%); mask-image: url('/icons/profile/star.svg'); -webkit-mask-image: url('/icons/profile/star.svg'); 
                mask-size: 2.5rem; -webkit-mask-size: 2.5rem;`">
            </div>

            <div class="flex items-center gap-3 text-[#2D2D2D] font-bold text-[1.75rem]">
                {{ score }}
                <img class="h-8" src="/icons/profile/star.svg" alt="star">
            </div>
        </div>

        <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2"></div>

        <div class="flex gap-1 px-4 justify-between items-center text-2xl font-bold text-[#2D2D2D]">
            به دیگران پیشنهاد میکنید؟

            <div class="flex -ml-3 items-center text-[1.75rem]">
                <span class="-ml-1">13</span>
                <img class="h-16 cursor-pointer" src="/icons/profile/like.svg" alt="like">
            </div>
        </div>

        <div class="bg-white rounded-[2rem] py-4 px-8 mt-12 shadow-md">
            <div class="flex items-center gap-1 text-[#808080] font-bold text-[1.625rem]">
                <img class="h-10" src="/icons/books/pen.svg" alt="pen">
                چکیده
            </div>

            <div class="rounded-full h-[0.125rem] bg-[#35B9BE] mt-2"></div>

            <p class="text-justify text-xl text-[#3E3E3E] leading-[1.9rem] mt-3 pb-2">
                اختلال ریاضی با ناتوانی در انجام محاسبات ریاضی و ترس از برخورد با ریاضیات و کتاب مشخص می شود. سندرم گرستمن،
                اختلال محاسباتی، اختلال مادرزادی در حساب، نقص در حساب و اختلال رشد در حساب، همگی شرایط مرتبط با این اختلال
                هستند. اختلال ریاضی تا قبل از سال 1980 به عنوان یک ناهنجاری روانپزشکی شناخته نشد، اما از آن به بعد به عنوان
                یک موضوع روانپزشکی به رسمیت شناخته شد.
            </p>
        </div>

        <div class="mt-8 rounded-full h-16 bg-[#57C5C6] flex items-center justify-between px-6">
            <div class="text-white font-bold text-2xl">
                دانلود نسخه الکترونیک
                <span class="font-normal text-xl">
                    (pdf)
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>

const score = ref(4.7)

</script>