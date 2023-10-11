<template>
    <div class="mx-10">
        <div
            class="bg-white rounded-full shadow-lg flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            اقدام پژوهی
            <span class="text-xl px-2 pt-1.5">(2)</span>
        </div>

        <div>
            <div
                class="rounded-[1rem] bg-[#21C2C0] h-12 flex items-center justify-center font-bold text-white text-2xl mt-8 cursor-pointer" @click="isFinal = !isFinal">
                راه یافته به مرحله استانی</div>

            <div class="h-[0.125rem] bg-[#35C7C6] rounded-full mt-4"></div>

            <div class="mt-4 space-y-6">
                <ProjectsResearch url="/images/projects/final.png" title="استدلال استنتاجی" subject="ریاضی"
                    age="سنین 18 سال" summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را" date="1402/07/20"
                    :wait="true">
                </ProjectsResearch>
            </div>

            <div v-if="!isFinal" class="h-[0.125rem] bg-[#35C7C6] rounded-full mt-[10rem]"></div>
        </div>

        <div v-if="!isFinal" class="mt-4 space-y-6">
            <ProjectsResearch url="/images/projects/research1.png" title="درمان اختلالات ریاضی" subject="ریاضی"
                age="سنین 12 تا 18 سال" summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را" date="1401/07/12">
            </ProjectsResearch>
            <ProjectsResearch url="/images/projects/research2.png" title="تولد دوباره زمان" subject="فیزیک" age="تمام سنین"
                summary="در این کتاب سعی به عمل آمده که شرح کلی از روابط اعداد" date="1400/07/16"></ProjectsResearch>
        </div>

        <div v-else>
            <div class="text-[#000000] text-[2rem] font-bold text-center mt-[10rem] ">مسیر بررسی اثر</div>
            <div class="h-[0.125rem] bg-[#35C7C6] rounded-full mt-4"></div>

            <div class="mt-12">
                <div class="flex flex-col relative">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center grow">
                            <div
                                class="w-20 h-20 shrink-0 rounded-full flex items-center justify-center bg-[#34C3C9] text-white text-[3rem] shadow-lg">
                                1</div>
                            <div
                                class="text-[1.75rem] mobile:text-center mobile:text-[1.5rem] text-[#00B9B7] shadow-lg font-bold flex items-center px-6 bg-white h-20 rounded-full grow">
                                بررسی توسط داور ناحیه</div>
                        </div>

                        <div class="text-center text-[#34C3C9] text-[1.5rem] font-bold w-[7rem] shrink-0">
                            <img class="h-[2.75rem] mx-auto" src="/icons/projects/confirm.svg" alt="confirm">
                            <div class="-mt-1">تایید</div>
                        </div>
                    </div>

                    <div class="w-[0.25rem] h-20 bg-[#34C3C9] mr-[2.375rem] my-1 rounded-full"></div>

                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center grow">
                            <div
                                class="w-20 h-20 shrink-0 rounded-full flex items-center justify-center bg-[#34C3C9] text-white text-[3rem] shadow-lg">
                                2</div>
                            <div
                                class="text-[1.75rem] mobile:text-center mobile:text-[1.5rem] text-[#00B9B7] shadow-lg font-bold flex items-center px-6 bg-white h-20 rounded-full grow">
                                بررسی توسط داور شهرستان</div>
                        </div>

                        <div class="text-center text-[#34C3C9] text-[1.5rem] font-bold w-[7rem] shrink-0">
                            <img class="h-[2.75rem] mx-auto" src="/icons/projects/confirm.svg" alt="confirm">
                            <div class="-mt-1">تایید</div>
                        </div>
                    </div>

                    <div class="w-[0.25rem] h-20 bg-[#34C3C9] mr-[2.375rem] my-1 rounded-full"></div>

                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center grow">
                            <div
                                class="w-20 h-20 shrink-0 rounded-full flex items-center justify-center bg-white text-balck text-[3rem] shadow-lg border-[0.125rem] border-[#36C4CA]">
                                3</div>
                            <div
                                class="text-[1.75rem] mobile:text-center mobile:text-[1.5rem] text-black shadow-lg font-bold flex items-center px-6 bg-white h-20 rounded-full border-[0.125rem] border-[#36C4CA] grow">
                                بررسی توسط داور شهرستان</div>
                        </div>

                        <div class="text-center text-[#F50000] text-[1.5rem] font-bold w-[7rem] shrink-0">
                            <img class="h-[2.75rem] mx-auto" src="/icons/projects/denied.svg" alt="denied">
                            <div class="-mt-1">عدم تایید</div>
                        </div>
                    </div>

                    <!-- <div class="absolute h-full w-[0.25rem] right-[2.375rem] top-0 bg-[#34C3C9] z-[-1]"></div> -->
                </div>

                <div
                    class="bg-white text-xl text-[#000000] py-4 px-6 rounded-[2rem] border-[0.125rem] border-[#36C4CA] mr-24 ml-[7rem] mt-3 shadow-lg">
                    سلام واحترام
                    <br>
                    تشکر ویژه از شما فرهنگی عزیز
                    <br>
                    متاسفانه اثر شما برای ارسال به مرحله کشوری تایید نشد
                    <br>
                    قدردان زحمات ارزشمند شما هستیم
                </div>
            </div>
        </div>

        <div></div>

        <div class="fixed bottom-0 right-0 pb-14 px-10 w-full">
            <div class="max-w-[100rem] mx-auto w-full flex items-center gap-4 text-[#21C2C0] text-[2rem] font-bold">
                <div class="w-20 h-20 shrink-0 rounded-full bg-[#21C2C0] relative cursor-pointer shadow-lg"
                    @click="navigateTo('/projects/research/new')">
                    <div class="w-[60%] h-[0.5rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                    </div>
                    <div class="h-[60%] w-[0.5rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                    </div>
                </div>

                ثبت اقدام پژوهی جدید
            </div>
        </div>
    </div>
</template>

<script setup>

const isFinal = ref(false)

</script>