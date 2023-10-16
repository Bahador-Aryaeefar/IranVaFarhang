<template>
    <div class="mx-10 mobile:mx-6">
        <div class="flex gap-4 mt-8 max-w-[60rem] mx-auto text-[#707070] font-bold flex-wrap">
            <div class="flex-[2] mobile:w-full mobile:flex-auto">
                <div
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    کتاب ها
                    <img class="absolute left-8 top-0 bottom-0 my-auto h-5 pt-1" src="/icons/books/down.svg" alt="down">
                </div>
            </div>
            <div class="flex-1">
                <div
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    موضوع
                    <img class="absolute left-8 top-0 bottom-0 my-auto h-5 pt-1" src="/icons/books/down.svg" alt="down">
                </div>
            </div>
            <div class="flex-1">
                <div
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    پایه
                    <img class="absolute left-8 top-0 bottom-0 my-auto h-5 pt-1" src="/icons/books/down.svg" alt="down">
                </div>
            </div>
        </div>

        <div class="h-[0.125rem] rounded-full bg-[#26C3C2] mt-8"></div>

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
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    سال انتشار
                    <img class="absolute left-8 top-0 bottom-0 my-auto h-5 pt-1" src="/icons/books/down.svg" alt="down">
                </div>
            </div>
            <div class="flex-1">
                <div
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                    پر امتیاز ترین
                </div>
            </div>
        </div>

        <div class="mt-16 space-y-8">
            <BooksBook url="/images/books/book1.png" title="درمان اختلالات ریاضی" subject="ریاضی"
                age="سنین 12 تا 18 سال" summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را" name="دکتر مصطفی تبریزی" star="4.8">
            </BooksBook>
            <BooksBook url="/images/books/book2.png" title="تولد دوباره زمان" subject="فیزیک"
                age="تمام سنین" summary="در این کتاب سعی به عمل آمده که شرح کلی از روابط اعداد" name="دکتر سحر عرب زاده" star="3.9">
            </BooksBook>
            <BooksBook url="/images/books/book3.png" title="بنی آدم" subject="ادبیات"
                age="تمام سنین" summary="کتاب بنی آدم، مجموعه ای از داستان های کوتاه نوشته محمود" name="محمود دولت آبادی" star="4.9">
            </BooksBook>
        </div>
    </div>
</template>

<script setup>

const isAdvance = ref(false)

</script>