<template>
    <div class="fixed left-0 top-0 w-[100vw] h-[100vh] bg-[#00000040] z-[10] flex break-words overflow-auto">
        <div class="w-[29rem] bg-white rounded-[1rem] py-6 px-10 m-auto">
            <h1 class="text-[2rem] font-bold leading-[3.5rem] text-[#57C5C6] text-center">
                {{ !isLogin ? "ثبت نام" : "ورود" }}
            </h1>
            <h2 class="text-[#5B4A42] leading-[1.75rem] text-center">به سامانه ایران و فرهنگ خوش آمدید</h2>

            <div class="flex p-1 h-[2.5rem] bg-[#F7F7F9] rounded-[0.5rem] text-[#514037] w-[13.25rem] mx-auto mt-4">
                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-[0.5rem]"
                    :class="!isLogin ? 'text-[#57C5C6] bg-white' : ''" @click="isLogin = false">
                    ثبت نام
                </div>

                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-[0.5rem]"
                    :class="isLogin ? 'text-[#57C5C6] bg-white' : ''" @click="isLogin = true">
                    ورود
                </div>
            </div>


            <form class="mt-10 space-y-4" @submit.prevent="" autocomplete="on">
                <div class="h-16 relative">
                    <img class="w-6 absolute right-4 top-0 bottom-0 my-auto" src="/icons/auth/email.svg" alt="email">
                    <input id="email" v-model="email"
                        :class="(isConfirmed && !email) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-[3.25rem] w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-[1rem]"
                        type="text" placeholder="ایمیل">
                </div>

                <div v-if="!isLogin" class="h-16 relative">
                    <img class="w-6 absolute rtl:right-4 ltr:left-4 top-0 bottom-0 my-auto" src="/icons/auth/name.svg"
                        alt="name">
                    <input id="name" v-model="name"
                        :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-[3.25rem] w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-[1rem]"
                        type="text" placeholder="نام">
                </div>

                <div class="h-16 relative">
                    <img class="w-6 absolute rtl:right-4 ltr:left-4 top-0 bottom-0 my-auto" src="/icons/auth/password.svg"
                        alt="password">
                    <input id="password" v-model="password"
                        :class="(isConfirmed && !password) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-[3.25rem] w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-[1rem]"
                        :type="isPass ? 'password' : 'text'" placeholder="رمز">
                    <img @click="isPass = !isPass"
                        class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                        :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                </div>

                <div v-if="!isLogin" class="h-16 relative">
                    <img class="w-6 absolute rtl:right-4 ltr:left-4 top-0 bottom-0 my-auto" src="/icons/auth/password.svg"
                        alt="password">
                    <input id="confirm" v-model="confirm"
                        :class="(isConfirmed && (!confirm || confirm != password)) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-full px-[3.25rem] w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#57C5C6] rounded-[1rem]"
                        :type="isPass ? 'password' : 'text'" placeholder="تکرار رمز">
                    <img @click="isPass = !isPass"
                        class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                        :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                </div>
            </form>

            <div @click="getAuth"
                class="flex items-center justify-center h-16 mt-4 rounded-[1rem] bg-[#57C5C6] cursor-pointer gap-2 text-white text-xl">
                <img class="w-6" :src="`/icons/auth/${isLogin ? 'login-a' : 'register'}.svg`" alt="login">
                {{ isLogin ? "ورود" : "ثبت نام" }}
            </div>

            <div v-if="isLogin" class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری ندارید؟
                <span class="mx-2 text-[#57C5C6] cursor-pointer" @click="isLogin = false">ثبت نام</span>
            </div>

            <div v-else class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری دارید؟
                <span class="mx-2 text-[#57C5C6] cursor-pointer" @click="isLogin = true">ورود</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRoute()
const isLogin = ref(router.query.type == 's' ? false : true)
const email = ref("")
const name = ref("")
const password = ref("")
const confirm = ref("")
const isPass = ref(true)
const isConfirmed = ref(false)

const auth = useAuth()
const getAuth = () => {
    if (isLogin.value) login()
    else register()
}

const login = () => {
    isConfirmed.value = true
    let isValid = true

    if (!email.value) isValid = false
    if (!password.value) isValid = false

    if (!isValid) return

    const req = {
        email: email.value,
        password: password.value
    }

    console.log(req)
    auth.login(req)
}

const register = () => {
    isConfirmed.value = true
    let isValid = true

    if (!email.value) isValid = false
    if (!name.value) isValid = false
    if (!password.value) isValid = false
    if (password.value != confirm.value) isValid = false

    if (!isValid) return

    const req = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    console.log(req)
    auth.register(req)
}
</script>