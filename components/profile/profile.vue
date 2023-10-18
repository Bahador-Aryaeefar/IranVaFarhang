<template>
    <div>
        <!-- <img class="w-8" src="/icons/profile/star.svg" alt="star"> -->

        <div class="mt-8 flex items-center justify-between max-w-[35rem] mx-auto">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <img class="w-[7rem] rounded-full mx-auto border-[0.125rem] border-white shadow-md"
                    src="/images/profile/pro.png" alt="profile">
                مصطفی تبریزی
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

                <button class="h-10 w-full rounded-full bg-[#1DA8A6] mt-4 text-white text-xl font-bold shadow-md">دنبال کردن</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const score = ref(3.6)

</script>