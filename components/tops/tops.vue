<template>
    <div>
        <div
            class="h-16 max-w-[60rem] mx-auto mt-8 bg-[#57C5C6] rounded-full px-8 text-2xl text-white font-bold flex items-center justify-center shadow-md">
            تجربه های برتر آموزش
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

        <div v-if="isAdvance" class="mt-4 max-w-[60rem] mx-auto text-[#707070] font-bold">
            <div class="flex gap-4">
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full pl-4 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        رشته
                        <img class="absolute left-4 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/books/down.svg" alt="down">
                    </div>
                </div>
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full pl-4 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        پایه
                        <img class="absolute left-4 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/books/down.svg" alt="down">
                    </div>
                </div>
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full pl-4 text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        سال انتشار
                        <img class="absolute left-4 top-0 bottom-0 my-auto h-[1.125rem] pt-1" src="/icons/books/down.svg" alt="down">
                    </div>
                </div>
            </div>

            <div class="flex gap-4 mt-4">
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        پر امتیاز ترین
                    </div>
                </div>
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        ویدئو
                    </div>
                </div>
                <div class="flex-1">
                    <div
                        class="h-16 w-full bg-white rounded-full text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        متن
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 space-y-8 max-w-[29rem] mx-auto">
            <TopsVideo url="/images/landing/video1.png" :score="4.7" name="مصطفی تبریزی" type="ریاضی">تجربه آموزش مثلثات با استفاده از اشکال هندسی</TopsVideo>
            <TopsVideo url="/images/landing/video2.png" color="2" :score="4.1" name="حسن کوچکی" type="ادبیات">آموزش الهی نامه پایه دهم</TopsVideo>
            <TopsText :score="4.6" name="محمد ایمانی" type="دین و زندگی">آموزش دین و زندگی پایه دهم</TopsText>
        </div>
    </div>
</template>

<script setup>

const isAdvance = ref(false)

</script>