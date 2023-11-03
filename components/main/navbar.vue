<template>
    <nav class="h-[4rem] bg-[#57C5C6] flex items-center justify-between px-8 text-white text-xl">
        <div class="flex gap-5 items-center">
            <div class="gap-0.5 mt-1 flex cursor-pointer"  @click="navigateTo('/projects')">
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>

            <div v-if="true" class="flex items-center gap-3">
                <NuxtLink to="auth" class="cursor-pointer hover:text-[#BCF5F1]">ورود</NuxtLink>
                <div class="h-4 w-[0.125rem] bg-white rounded-full"></div>
                <NuxtLink to="auth?type=s" class="cursor-pointer hover:text-[#BCF5F1]">ثبت نام</NuxtLink>
            </div>

            <div v-else class="cursor-pointer hover:text-[#BCF5F1]" @click="navigateTo('/profile')">محمدجواد صیادیان</div>
        </div>
        
        <div class="cursor-pointer hover:text-[#BCF5F1]" @click="navigateTo('/')">ایران و فرهنگ</div>
    </nav>
</template>