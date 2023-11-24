<template>
    <div class="bg-white rounded-[2rem] shadow-md flex items-center p-4 gap-4 relative">
        <div class="w-[9.375rem] h-[12.25rem] rounded-[1rem] bg-cover shrink-0 border-[0.25rem]" :style="`background-image: url('${url}');`">
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
                        <img class="h-10 cursor-pointer shrink-0" src="/icons/projects/pen.svg" alt="pen">
                        <div class="truncate">{{ summary }}</div>
                    </div>

                    <template v-if="true">
                        <NuxtLink v-if="!url && false" to="/projects/research/new?type=fill"
                            class="py-1 px-4 rounded-[0.75rem] bg-[#F5F6FA] text-lg font-bold text-[#20BFBE]">تکمیل
                        </NuxtLink>
                        <NuxtLink v-else to="/projects/research/new?type=edit"
                            class="py-1 px-4 rounded-[0.75rem] bg-[#F5F6FA] text-lg font-bold text-[#20BFBE]">ویرایش
                        </NuxtLink>
                    </template>
                </div>

                <div class="h-[0.125rem] bg-[#35C7C6] rounded-full mt-2"></div>

                <div class="mt-2 text-lg">
                    نوع اقدام پژوهی:
                    <span>{{ date }}</span>
                </div>
            </div>
        </div>

        <img v-if="wait" class="w-10 absolute left-6 top-6" src="/icons/projects/wait.svg" alt="wait">
    </div>
</template>

<script setup>
const props = defineProps(['url', 'title', 'subject', 'age', 'summary', 'date', 'wait'])
</script>