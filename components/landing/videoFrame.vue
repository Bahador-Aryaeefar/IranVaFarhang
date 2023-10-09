<template>
    <div class="p-4 rounded-[1rem] bg-white shadow-xl text-[#2B2B2B] cursor-pointer group">
        <div class="w-[26.25rem] h-[15.1875em] rounded-[1rem] overflow-hidden flex items-center justify-center relative">
            <img class="w-full h-full absolute left-0 top-0 group-hover:scale-[108%] transition-all duration-500" :src="url" alt="video">
            <img class="w-16 h-16 z-[1]" :src="`/icons/landing/play${color}.svg`" alt="play">
        </div>

        <div class="mt-3 text-[1.3rem] text-center">
            <slot/>
        </div>

        <div class="h-[0.125rem] rounded-full bg-[#26C3C2] mt-3"></div>

        <div class="flex items-center justify-center gap-3 text-[1.5rem] font-bold mt-3">
            {{score}}
            <img class="w-8 mb-1" src="/icons/landing/star.svg" alt="star">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    score: Number,
    url: String,
    color: {
        default: "1",
        type: String
    }
})
</script>