<template>
    <div class="bg-white rounded-[2rem] shadow-md flex items-center p-4 gap-4 relative">
        <div class="border-[0.15rem] w-[9.375rem] h-[12.25rem] rounded-[1rem] bg-contain bg-no-repeat bg-center shrink-0" :style="`background-image: url('${url}');`">
        </div>

        <div class="grow text-[#2D2D2D] self-stretch flex flex-col justify-between min-w-0">
            <div>
                <div class="text-2xl font-bold">{{ title }}</div>
                <div class="text-lg">{{ subject }}</div>
                <div class="text-lg">{{ age }}</div>
            </div>

            <div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-1 items-center text-lg min-w-0">
                        <img class="h-10 cursor-pointer shrink-0" src="/icons/books/pen.svg" alt="pen">
                        <div class="truncate">{{ summary }}</div>
                    </div>

                    <NuxtLink :to="`/books/${id}`" class="py-1 px-4 rounded-[0.75rem] bg-[#F5F6FA] text-lg font-bold text-[#20BFBE]">بیشتر</NuxtLink>
                </div>

                <div class="h-[0.125rem] bg-[#35C7C6] rounded-full mt-2"></div>

                <div class="mt-2 text-lg flex gap-1 text-[#555555] text-xl items-center">
                    <img class="h-8 mr-1" src="/icons/books/name.svg" alt="name">
                    {{name}}
                </div>
            </div>
        </div>
        
        <div class="absolute left-6 top-5 flex items-center gap-2 text-2xl text-[#2D2D2D] font-bold">
            {{star}}
            <img class="h-7" src="/icons/books/star.svg" alt="star">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['url', 'title', 'subject', 'age', 'summary', 'name', 'star', 'id'])
</script>