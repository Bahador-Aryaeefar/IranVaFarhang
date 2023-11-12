<template>
    <div>
        <!-- <img class="w-8" src="/icons/profile/star.svg" alt="star"> -->

        <div class="mt-8 flex items-end justify-between max-w-[35rem] mx-auto">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <img class="w-[7rem] rounded-full mx-auto border-[0.125rem] border-white shadow-md"
                    src="/images/profile/pro.png" alt="profile">
                {{ id }}
            </div>

            <div>
                <div class="flex gap-2 text-center px-4">
                    <div class="w-[6.25rem]">
                        <div class="text-[#2D2D2D] font-bold text-2xl">98</div>
                        <div class="text-black text-lg mt-1">دنبال کننده</div>
                    </div>
                    <div class="w-[6.25rem]">
                        <div class="text-[#2D2D2D] font-bold text-2xl">17</div>
                        <div class="text-black text-lg mt-1">تعداد آثار</div>
                    </div>
                    <div class="w-[6.25rem]">
                        <div class="text-[#2D2D2D] font-bold text-2xl">{{ score }}</div>
                        <div class="h-5 w-[6.25rem] mt-2"
                            :style="`background: linear-gradient(90deg, #ffb400 ${score / 5 * 100}%, #e1e1e1 ${score / 5 * 100}%); mask-image: url('/icons/profile/star.svg'); -webkit-mask-image: url('/icons/profile/star.svg'); mask-size: 1.25rem; -webkit-mask-size: 1.25rem;`">
                        </div>
                    </div>
                </div>

                <button class="h-10 w-full rounded-full bg-[#1DA8A6] mt-4 text-white text-xl font-bold shadow-md">دنبال
                    کردن</button>
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">درباره من</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
            <div class="flex items-center gap-4 mt-6">
                <button class="h-10 rounded-full w-full text-xl font-bold" @click="myState = 1"
                    :class="myState == 1 ? 'bg-[#1DA8A6] text-white' : 'text-black'">توضیحات</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="myState = 2"
                    :class="myState == 2 ? 'bg-[#1DA8A6] text-white' : 'text-black'">سوابق کاری</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="myState = 3"
                    :class="myState == 3 ? 'bg-[#1DA8A6] text-white' : 'text-black'">راه های ارتباطی</button>
            </div>

            <div class="mt-12">
                <ul v-if="myState == 1" class="text-lg text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        دکترای ریاضی محض (دانشگاه امیرکبیر)
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کارشناس ارشد ریاضی (دانشگاه رازی)
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کارشناس فیزیک (دانشگاه رازی)
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        معلم دبستان
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کرمانشاه
                    </li>
                </ul>

                <ul v-else-if="myState == 2" class="text-lg text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        پانزده سال سابقه تدریس به عنوان آموزگار از سال 87
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        همکاری با بنیاد نخبگان از سال 96
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        همکاری با شرکت سانا فناوری سورنا به عنوان محقق از سال 98
                    </li>
                </ul>

                <ul v-else-if="myState == 3" class="text-lg text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        ایمیل :
                        <span>mostafatabrizi@gmail.com</span>
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        ایتا :
                        <span>@mostafatabrizi1402</span>
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        تلگرام :
                        <span>@mostafatabrizi1402</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">آثار</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
            <div class="flex items-center gap-4 mt-6">
                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 1"
                    :class="bookState == 1 ? 'bg-[#1DA8A6] text-white' : 'text-black'">کتاب (2)</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 2"
                    :class="bookState == 2 ? 'bg-[#1DA8A6] text-white' : 'text-black'">مقاله (4)</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 3"
                    :class="bookState == 3 ? 'bg-[#1DA8A6] text-white' : 'text-black'">تجربه برتر (1)</button>
            </div>

            <div class="mt-12 space-y-8">
                <UserBook url="/images/books/book1.png" title="درمان اختلالات ریاضی" subject="ریاضی" age="سنین 12 تا 18 سال"
                    summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را" name="دکتر مصطفی تبریزی" star="4.8">
                </UserBook>
                <UserBook url="/images/books/book2.png" title="تولد دوباره زمان" subject="فیزیک" age="تمام سنین"
                    summary="در این کتاب سعی به عمل آمده که شرح کلی از روابط اعداد" name="دکتر مصطفی تبریزی" star="3.9">
                </UserBook>
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">افتخارات</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>

            <div class="mt-12 space-y-12">
                <UserTop class="w-full" color="bg-[#FFC105]" profile="/images/profile/first.png"
                    eye="/icons/landing/first.png" name="درمان اختلالات ریاضی" title="مقام نخست اقدام پژوهی کشور"
                    year="1401"></UserTop>
                <UserTop class="w-full" color="bg-[#D2D2D2]" profile="/images/profile/second.png"
                    eye="/icons/landing/second.png" name="تولد دوباره زمان" title="مقام دوم اقدام پژوهی استان کرمانشاه"
                    year="1400"></UserTop>
                <UserTop class="w-full" color="bg-[#D66E40]" profile="/images/profile/third.png"
                    eye="/icons/landing/third.png" name="استدلال استنتاجی" title="مقام سوم اقدام پژوهی استان کرمانشاه"
                    year="1399"></UserTop>
            </div>
        </div>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const score = ref(3.6)

const myState = ref(1)
const bookState = ref(1)


</script>