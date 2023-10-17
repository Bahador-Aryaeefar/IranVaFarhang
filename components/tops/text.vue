<template>
    <div class="p-4 rounded-[1rem] bg-white shadow-md text-[#2B2B2B] cursor-pointer group">
        <div class="text-[1.3rem] text-center">
            <slot />
            (pdf)
        </div>

        <div class="h-[0.125rem] rounded-full bg-[#26C3C2] mt-3"></div>

        <div class="flex items-center justify-between text-[1.125rem] font-bold mt-3 text-center">
            <span class="text-[#555555] w-1/3 pb-1">{{ name }}</span>
            <div class="h-6 w-[0.125rem] rounded-full bg-[#08B3B9]"></div>
            <span class="text-[#555555] w-1/3 pb-1">{{ type }}</span>
            <div class="h-6 w-[0.125rem] rounded-full bg-[#08B3B9]"></div>
            <div class="flex items-center justify-center gap-3 w-1/3">
                {{ score }}
                <img class="w-6" src="/icons/landing/star.svg" alt="star">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    score: Number,
    name: String,
    type: String
})
</script>