<template>
    <div class="max-w-[60rem] mx-auto">
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            اقدام پژوهی
        </div>

        <NuxtLink v-if="!item || !item.name" to="/projects/research/new"
                class="mt-8 h-20 rounded-[1.25rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full block flex items-center justify-center ">ثبت</NuxtLink>

        <div v-else-if="item" class="mt-8 space-y-6">
            <ProjectsResearch :url="`https://api.37pajoohesh.ir/images/research/${item.file_image}`" :title="item.name" :subject="categories[item.category_id-1]"
                :age="grades[item.grade_id-1]" :summary="item.description" :date="types[item.individual]">
            </ProjectsResearch>
        </div>

        <div v-if="false" class="fixed bottom-0 right-0 pb-14 px-10 w-full">
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
const research = useResearch()
const item = computed(() => research.research.value)
research.getResearches()
const categories = [
    'آموزش و یادگیری',
    'بهداشت و محیط زیست',
    'تربیت بدنی و سلامت',
    'دینی و اجتماعی',
    'روانشناسی',
    'سایر',
    'علوم پایه',
    'فرهنگی و هنری',
    'فناوری و اطلاعات',
    'فنی حرفه ای و کاردانش',
    'کودکان استثنایی',
    'مدیریت',
]
const grades = [
    'ابتدایی',
    'متوسطه اول',
    'متوسطه دوم',
    'کاردانش و فنی حرفه ای',
    'اداری',
    'دانشجو معلم'
]
const lines = [
    'کتاب',
    'مقاله',
    'تجربه های برتر'
]
const types = [
    'انفرادی',
    'گروهی'
]

</script>