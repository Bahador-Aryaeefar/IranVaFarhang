<template>
    <nav class="h-[4rem] bg-[#57C5C6] flex items-center justify-between px-8 text-white text-xl">
        <div class="flex gap-5 items-center">
            <div class="gap-0.5 mt-1 flex cursor-pointer"  @click="navigateTo('/projects')">
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>

            <div class="flex items-center gap-3">
                <span class="cursor-pointer hover:text-[#BCF5F1]">ورود</span>
                <div class="h-4 w-[0.125rem] bg-white rounded-full"></div>
                <span class="cursor-pointer hover:text-[#BCF5F1]">ثبت نام</span>
            </div>
        </div>
        
        <div class="cursor-pointer hover:text-[#BCF5F1]" @click="navigateTo('/')">ایران و فرهنگ</div>
    </nav>
</template>