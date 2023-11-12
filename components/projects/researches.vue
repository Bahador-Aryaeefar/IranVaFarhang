<template>
    <div class="max-w-[60rem] mx-auto">
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            آثار
        </div>

        <div class="mt-8 space-y-6">
            <ProjectsResearch url="/images/projects/research1.png" title="درمان اختلالات ریاضی" subject="ریاضی"
                age="سنین 12 تا 18 سال" summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را" date="1401/07/12">
            </ProjectsResearch>
            <ProjectsResearch url="/images/projects/research2.png" title="تولد دوباره زمان" subject="فیزیک" age="تمام سنین"
                summary="در این کتاب سعی به عمل آمده که شرح کلی از روابط اعداد" date="1400/07/16"></ProjectsResearch>
        </div>

        <div class="fixed bottom-0 right-0 pb-14 px-10 w-full">
            <div class="max-w-[100rem] mx-auto w-full flex items-center gap-4 text-[#21C2C0] text-[2rem] font-bold">
                <div class="w-20 h-20 shrink-0 rounded-full bg-[#21C2C0] relative cursor-pointer shadow-md"
                    @click="navigateTo('/projects/research/new')">
                    <div class="w-[60%] h-[0.5rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                    </div>
                    <div class="h-[60%] w-[0.5rem] bg-white rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                    </div>
                </div>

                <!-- ثبت اقدام پژوهی جدید -->
            </div>
        </div>
    </div>
</template>

<script setup>

const isFinal = ref(false)

</script>