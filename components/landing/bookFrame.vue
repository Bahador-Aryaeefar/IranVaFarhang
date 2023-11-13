<template>
    <NuxtLink class="border-[0.125rem] w-[14.5rem] h-[21.5rem] relative rounded-[0.75rem] shadow-md flex flex-col justify-between overflow-hidden cursor-pointer group text-[#2B2B2B]">
        <div class="absolute w-full h-full left-0 top-0 bg-contain bg-center bg-no-repeat z-[-1] group-hover:scale-[110%] transition-all duration-500" :style="`background-image: url('${url}');`"></div>

        <div class="self-end px-1.5 py-0.5 w-fit m-2 bg-[rgba(255,255,255,0.7)] backdrop-blur-[0.5rem] flex items-center rounded-[0.75rem] gap-2 text-[1.3rem] font-bold">
            {{score}}
            <img class="w-6" src="/icons/landing/star.svg" alt="star">
        </div>

        <div class="h-10 bg-[rgba(255,255,255,0.7)] backdrop-blur-[0.5rem] pb-1 text-center flex items-center justify-center text-[1.3rem]">
            <slot/>
        </div>
    </NuxtLink>
</template>

<script setup>

const props = defineProps(['score','url'])

</script>