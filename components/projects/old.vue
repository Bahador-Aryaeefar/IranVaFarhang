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
                        placeHolder="موضوع را وارد کنید" :error="isConfirmed && !category"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        مقطع تحصیلی اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <UiSelect2 :value="grade" @pick="(picked) => grade = picked" :items="grades" class="mt-2"
                        placeHolder="مقطع تحصیلی را وارد کنید" :error="isConfirmed && !grade"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        دسته بندی اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <UiSelect2 :value="line" @pick="(picked) => line = picked" :items="lines" class="mt-2"
                        placeHolder="دسته بندی را وارد کنید" :error="isConfirmed && !line"></UiSelect2>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        رده سنی مخاطب اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <div class="h-14 relative mt-2">
                        <input id="age" v-model="ages"
                            :class="(isConfirmed && !ages) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-full text-center px-6 w-full bg-white placeholder:text-[#707070] text-[#000000] text-xl focus:outline-none border-[0.125rem] focus:border-[#57C5C6] rounded-full shadow-md"
                            type="text" placeholder="رده سنی  را وارد کنید">
                    </div>
                </div>

                <div class="w-[20rem] grow">
                    <div class="text-2xl font-bold text-center">
                        بارگذاری اثر
                    </div>

                    <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                    <div :class="(isConfirmed && !file) ? 'border-[#EE0035]' : 'border-[#21C2C0]'"
                        class="relative flex items-center justify-center cursor-pointer h-14 w-full bg-[#21C2C0] rounded-full text-white text-xl shadow-md mt-2 border-[0.125rem]">
                        {{ fileName }}

                        <input id="file" type="file" @change="pickFile"
                            class="w-full h-full cursor-pointer opacity-0 absolute top-0 left-0 z-[1]">
                    </div>

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

                    <div class="mt-4 relative cursor-pointer w-fit mx-auto border-[0.125rem] rounded-[2.5rem]"
                        :class="(isConfirmed && !pickedImage) ? 'border-[#EE0035]' : 'border-transparent'">
                        <img v-if="pickedImageRef" class="w-[15rem] mx-auto rounded-[1rem]" :src="pickedImageRef"
                            alt="photo">
                        <template v-else>
                            <img class="w-[15rem] mx-auto" src="/icons/projects/photo.svg" alt="photo">
                            <div class="absolute w-[4rem] h-[4rem] top-0 bottom-0 left-0 right-0 m-auto">
                                <div
                                    class="h-full w-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                                </div>
                                <div
                                    class="w-full h-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
                                </div>
                            </div>
                        </template>

                        <input id="logoImage" type="file" @change="change"
                            class="w-full h-full cursor-pointer opacity-0 absolute top-0 left-0 z-[1]">
                    </div>
                </div>
            </div>

            <button
                class="mt-8 h-20 rounded-[1.25rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full"
                @click="confirm()">ثبت</button>
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
const toast = useToast()
const research = useResearch()

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
        if (event.target.files[0].type != "image/jpeg" && event.target.files[0].type != "image/png") {
            toast.addError("فرمت عکس اشتباه است")
            return
        }
        // if (event.target.files[0].size > 600000) {
        //     errors.add("Logo Picture: Logo can't be bigger than 500KB")
        //     return
        // }
        pickedImage.value = event.target.files[0]
        reader.readAsDataURL(pickedImage.value)
    }
    reader.onload = (() => pickedImageRef.value = reader.result)
})



const fileName = ref("انتخاب فایل")
const file = ref(null)

const pickFile = (event) => {
    console.log(event.target.files[0]);
    file.value = event.target.files[0]
    fileName.value = event.target.files[0].name
}

const confirm = () => {
    isConfirmed.value = true
    let isValid = true

    if (!name.value) isValid = false
    if (!category.value) isValid = false
    if (!line.value) isValid = false
    if (!grade.value) isValid = false
    if (!ages.value) isValid = false
    if (!description.value) isValid = false
    if (!file.value) isValid = false
    if (!pickedImage.value) isValid = false

    if (!isValid) return

    let formData = new FormData()
    formData.append("name", name.value);
    formData.append("category_id", categories.indexOf(category.value) + 1);
    formData.append("line_id", lines.indexOf(line.value) + 1);
    formData.append("grade_id", grades.indexOf(grade.value) + 1);
    formData.append("description", description.value);
    formData.append("ages", ages.value);
    formData.append("file", file.value);
    formData.append("file_image", pickedImage.value);

    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }
    research.addResearch(formData)

}


</script>

<style scoped>
input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
    cursor: pointer; 
}
</style>