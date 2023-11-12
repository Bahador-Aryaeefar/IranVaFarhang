<template>
    <div class="max-w-[50rem] mx-auto">
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            ثبت اقدام پژوهی جدید
        </div>

        <div class="mt-10 text-[#707070]">
            <div class="flex gap-4 gap-y-8 flex-wrap justify-center">
                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        نام اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <div class="h-14 relative mt-2">
                        <input id="name" v-model="name"
                            :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full text-center px-6 w-full bg-white placeholder:text-[#707070] text-[#000000] text-xl focus:outline-none border-[0.125rem] focus:border-[#57C5C6] rounded-full shadow-md"
                            type="text" placeholder="نام را وارد کنید">
                    </div>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        موضوع اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <UiSelect2 :value="category" @pick="(picked) => category = picked" :items="categories" class="mt-2"
                        placeHolder="موضوع را وارد کنید"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        مقطع تحصیلی اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <UiSelect2 :value="grade" @pick="(picked) => grade = picked" :items="grades" class="mt-2"
                        placeHolder="مقطع تحصیلی را وارد کنید"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        دسته بندی اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <UiSelect2 :value="line" @pick="(picked) => line = picked" :items="lines" class="mt-2"
                        placeHolder="دسته بندی را وارد کنید"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        رده سنی مخاطب اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <div class="h-14 relative mt-2">
                        <input id="age" v-model="age"
                            :class="(isConfirmed && !age) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full text-center px-6 w-full bg-white placeholder:text-[#707070] text-[#000000] text-xl focus:outline-none border-[0.125rem] focus:border-[#57C5C6] rounded-full shadow-md"
                            type="text" placeholder="رده سنی  را وارد کنید">
                    </div>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        بارگذاری اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <button class="h-14 w-full bg-[#21C2C0] rounded-full text-white text-xl shadow-md mt-2">انتخاب
                        فایل</button>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        چکیده اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <textarea id="description" v-model="description"
                        :class="(isConfirmed && !description) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                        class="h-[15rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center border-[0.125rem] focus:border-[#57C5C6] shadow-md"
                        placeholder="چکیده اثر را وارد کنید"></textarea>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        بارگذاری تصویر اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <div class="mt-4 relative cursor-pointer w-fit mx-auto">
                        <img class="w-[15rem] mx-auto" src="/icons/projects/photo.svg" alt="photo">
                        <div class="absolute w-[4rem] h-[4rem] top-0 bottom-0 left-0 right-0 m-auto">
                            <div class="h-full w-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                            </div>
                            <div class="w-full h-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                            </div>
                        </div>

                        <input id="logoImage" type="file" @change="change"
                                    class="w-full h-full cursor-pointer opacity-0 absolute top-0 left-0 z-10">
                    </div>
                </div>
            </div>

            <button
                class="mt-8 h-20 rounded-[1.25rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full"
                @click="navigateTo('/projects/research')">ثبت</button>
        </div>
    </div>
</template>

<script setup>
const name = ref("")
const category = ref("")
const line = ref("")
const grade = ref("")
const description = ref("")
const ages = ref("")

const categories = ['ریاضی']
const grades = [
    'پایه اول',
    'پایه دوم',
    'پایه سوم',
    'پایه چهارم',
    'پایه پنجم',
    'پایه ششم',
    'پایه هفتم',
    'پایه هشتم',
    'پایه نهم',
    'پایه دهم',
    'پایه یازدهم',
    'پایه دوازدهم',
    'پایه سیزدهم',
]
const lines = [
    'کتاب',
    'مقاله',
    'تجربه های برتر'
]


const pickedImageRef = ref("")
const pickedImage = ref(null)
const isConfirmed = ref(false)

const change = ref(() => {

})

onMounted(() => {
    let reader = new FileReader()
    change.value = (event) => {
        console.log(event.target.files[0]);
        // if (event.target.files[0].type != "image/jpeg" && event.target.files[0].type != "image/png") {
        //     errors.add("Logo Picture: Not an acceptabel format")
        //     return
        // }
        // if (event.target.files[0].size > 600000) {
        //     errors.add("Logo Picture: Logo can't be bigger than 500KB")
        //     return
        // }
        pickedImage.value = event.target.files[0]
        reader.readAsDataURL(pickedImage.value)
    }
    reader.onload = (() => pickedImageRef.value = reader.result)
})
</script>