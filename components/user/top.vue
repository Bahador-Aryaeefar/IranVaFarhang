<template>
    <div class="bg-white min-h-[6rem] rounded-[2.5rem] w-[35rem] flex justify-between items-center shadow-md">
        <div class="flex items-center">
            <img class="w-[8rem] -my-4 mr-6 rounded-full border-[0.25rem] border-white shadow-md" :src="profile" alt="profile">

            <div class="h-[4.5rem] w-[0.125rem] mr-5 rounded-full" :class="color"></div>

            <div class="mr-4 min-w-0 py-2">
                <div class="text-xl font-bold text-[#2D2D2D] min-w-0 truncate" :title="title">{{ title }}</div>
                <div class="text-lg text-[#2D2D2D]">{{ name }}</div>
                <div class="text-base text-[#585858]">{{ year }}</div>
            </div>
        </div>

        <img class="w-[3.5rem] ml-6 cursor-pointer" :src="eye" alt="rank">
    </div>
</template>

<script setup>

const props = defineProps(['profile', 'eye', 'color', 'title', 'name', 'year'])

</script>