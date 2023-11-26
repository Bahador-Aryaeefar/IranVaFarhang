<template>
    <nav class="bg-[#57C5C6]">
        <div class="h-[4rem] flex items-center justify-between px-8 text-white text-xl">
            <div class="flex gap-5 items-center">
                <div v-if="false" class="gap-0.5 mt-1 flex cursor-pointer" @click="navigateTo('/projects')">
                    <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>

                <div class="flex items-center gap-3">
                    <NuxtLink v-if="auth.isLogin()" to="/profile" class="hover:text-[#BCF5F1]">{{user.user.value ? (user.user.value.name + ' ' + ((user.user.value.last_name) ? user.user.value.last_name : '')) : '-'}}</NuxtLink>
                    <NuxtLink v-else to="auth" class="cursor-pointer hover:text-[#BCF5F1]">ورود</NuxtLink>
                    <div class="h-4 w-[0.125rem] bg-white rounded-full"></div>
                    <div @click="auth.logout()" v-if="auth.isLogin()" class="cursor-pointer hover:text-[#BCF5F1]">خروج</div>
                    <NuxtLink v-else to="auth?type=s" class="cursor-pointer hover:text-[#BCF5F1]">ثبت نام</NuxtLink>
                </div>


            </div>

            <div class="cursor-pointer hover:text-[#BCF5F1]" @click="navigateTo('/')">ایران و فرهنگ</div>
        </div>
    </nav>
</template>

<script setup>
const auth = useAuth()
const user = useUser()
</script>