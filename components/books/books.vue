<template>
    <div class="mx-10 mobile:mx-6">
        <div class="flex gap-4 mt-8 max-w-[60rem] mx-auto text-[#707070] font-bold flex-wrap">
            <div class="flex-[2] mobile:w-full mobile:flex-auto">
                <UiSelect2 :value="line" @pick="(picked) => line = picked" :items="lines" class="mt-2"
                    placeHolder="دسته بندی" :error="isConfirmed && !line"></UiSelect2>
            </div>
            <div class="flex-1">
                <UiSelect2 :value="category" @pick="(picked) => category = picked" :items="categories" class="mt-2"
                    placeHolder="موضوع" :error="isConfirmed && !category"></UiSelect2>
            </div>
            <div class="flex-1">
                <UiSelect2 :value="grade" @pick="(picked) => grade = picked" :items="grades" class="mt-2" placeHolder="مقطع"
                    :error="isConfirmed && !grade"></UiSelect2>
            </div>
        </div>

        <div class="h-[0.125rem] rounded-full bg-[#26C3C2] mt-8 max-w-[60rem] mx-auto"></div>

        <div class="mt-8 flex gap-4 max-w-[60rem] mx-auto">
            <div class="h-16 bg-white rounded-full flex items-center shadow-sm px-3 grow">
                <img class="w-6 h-6 mx-4" src="/icons/books/search.png" alt="search">
                <input class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent text-lg"
                    type="text" placeholder="جستجو پیشرفته">
            </div>

            <div class="flex h-16 w-16 rounded-full  flex items-center justify-center cursor-pointer shadow-sm"
                :class="isAdvance ? 'bg-[#57C5C6]' : 'bg-white'" @click="isAdvance = !isAdvance">
                <img class="w-6 h-6" :src="`/icons/books/advance${isAdvance ? '-a' : ''}.svg`" alt="advance">
            </div>
        </div>

        <div v-if="isAdvance" class="flex gap-4 mt-4 max-w-[60rem] mx-auto text-[#707070] font-bold">
            <div class="flex-1">
                <div
                    class="h-16 w-full bg-white rounded-full pl-4 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    سال انتشار
                    <img class="absolute left-4 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/books/down.svg"
                        alt="down">
                </div>
            </div>
            <div class="flex-1">
                <div
                    class="h-16 w-full bg-white rounded-full text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    پر امتیاز ترین
                </div>
            </div>
        </div>

        <div class="mt-12 space-y-8">
            <BooksBook v-for="item in works.research.value" :url="`https://api.37pajoohesh.ir/images/${item.file_image}`" :title="item.name" :subject="categories[item.category_id-1]" :age="item.ages"
                :summary="item.description" name="-" :star="item.status" :id="item.id">
            </BooksBook>
        </div>
    </div>
</template>

<script setup>

const isAdvance = ref(false)
const category = ref("")
const line = ref("")
const grade = ref("")
const isConfirmed = ref(false)

const categories = ['ریاضی']
const grades = [
    'پایه اول',
    'پایه دوم',
    'پایه سوم',
    'پایه چهارم',
    'پایه پنجم',
    'پایه ششم',
    'پایه هفتم',
    'پایه هشتم',
    'پایه نهم',
    'پایه دهم',
    'پایه یازدهم',
    'پایه دوازدهم',
    'پایه سیزدهم',
]
const lines = [
    'کتاب',
    'مقاله',
    'تجربه های برتر'
]

const works = useWorks()
works.getResearch()
</script>