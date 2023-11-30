<template>
    <div class="max-w-[50rem] mx-auto">
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            {{ fill ? "تکمیل اقدام پژوهی" : (edit ? "تغییر اقدام پژوهی" : "ثبت اقدام پژوهی جدید") }}
        </div>

        <div class="mt-10 text-[#707070]">
            <div class="flex gap-4 gap-y-8 flex-wrap justify-center">
                <template v-if="!fill">
                    <div class="w-[20rem] grow">
                        <div class="text-2xl font-bold text-center">
                            عنوان اثر
                        </div>

                        <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                        <div class="h-14 relative mt-2">
                            <input id="name" v-model="name"
                                :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                                class="h-full text-center px-6 w-full bg-white placeholder:text-[#707070] text-[#000000] text-xl focus:outline-none border-[0.125rem] focus:border-[#57C5C6] rounded-full shadow-md"
                                type="text" placeholder="عنوان را وارد کنید">
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
                            نوع اثر
                        </div>

                        <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                        <UiSelect2 :value="individual" @pick="(picked) => individual = picked" :items="types" class="mt-2"
                            placeHolder="نوع را وارد کنید" :error="isConfirmed && !individual"></UiSelect2>
                    </div>

                    <div v-if="individual == 'گروهی'" class="w-[20rem] grow">
                        <div class="text-2xl font-bold text-center">
                            نام همکاران
                        </div>

                        <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                        <textarea id="partners" v-model="partners"
                            :class="(isConfirmed && !partners) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-[15rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center border-[0.125rem] focus:border-[#57C5C6] shadow-md"
                            placeholder="نام همکاران را وارد کنید"></textarea>
                    </div>

                    <div class="w-[20rem] grow">
                        <div class="text-2xl font-bold text-center">
                            چکیده اثر
                        </div>

                        <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                        <textarea id="description" v-model="description"
                            :class="(isConfirmed && !description) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#57C5C6]'"
                            class="h-[15rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center border-[0.125rem] focus:border-[#57C5C6] shadow-md"
                            placeholder="چکیده را وارد کنید"></textarea>
                    </div>
                </template>

                <div v-if="fill || edit" class="w-[20rem] grow">
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

                <div v-if="fill || edit" class="w-[20rem] grow">
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
const research = useResearch()
const router = useRoute() 
const toast = useToast()
const info = computed(() =>research.researches.value )

const categories = [
    'آموزش و یادگیری',
    'بهداشت و محیط زیست',
    'تربیت بدنی و سلامت',
    'دینی و اجتماعی',
    'روانشناسی',
    'سایر',
    'علوم پایه',
    'فرهنگی و هنری',
    'فناوری و اطلاعات',
    'فنی حرفه ای و کاردانش',
    'کودکان استثنایی',
    'مدیریت',
]
const grades = [
    'ابتدایی',
    'متوسطه اول',
    'متوسطه دوم',
    'کاردانش و فنی حرفه ای',
    'اداری',
    'دانشجو معلم'
]
const lines = [
    'کتاب',
    'مقاله',
    'تجربه های برتر'
]
const types = [
    'انفرادی',
    'گروهی'
]

const individual = ref("")
const partners = ref("")
const isConfirmed = ref(false)



const fill = ref(router.query.type == "fill")
const edit = ref(router.query.type == "edit")
const pickedImageRef = ref("")
const pickedImage = ref(null)

if(edit.value) {
    if(!info.value) navigateTo('/projects/research')
    name.value = info.value.name
    category.value = categories[info.value.category_id-1]
    grade.value = grades[info.value.grade_id-1]
    individual.value = types[info.value.individual] 
    description.value = info.value.description
    partners.value = info.value.partners
}

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
    if (fill.value) update()
    else if (edit.value) edits()
    else add()
}

const add = () => {
    isConfirmed.value = true
    let isValid = true

    if (!name.value) isValid = false
    if (!category.value) isValid = false
    // if (!line.value) isValid = false
    if (!grade.value) isValid = false
    if (!individual.value) isValid = false
    if (individual.value == "گروهی" && !partners.value) isValid = false
    if (!description.value) isValid = false

    if (!isValid) return

    const req = {
        name: name.value,
        category_id: categories.indexOf(category.value) + 1,
        line_id: 5,
        grade_id: grades.indexOf(grade.value) + 1,
        individual: types.indexOf(individual.value),
        partners: (partners.value) ? partners.value : 'ندارد',
        description: description.value
    }

    console.log(req);
    research.addResearch(req)
}

const update = () => {
    isConfirmed.value = true
    let isValid = true
    
    if (!file.value) isValid = false
    if (!pickedImage.value) isValid = false

    if (!isValid) return

    let formData = new FormData()
    formData.append("file", file.value);
    formData.append("file_image", pickedImage.value);

    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }

    research.updateResearch(formData)
}

const edits = () => {
    isConfirmed.value = true
    let isValid = true
    
    if (!file.value) isValid = false
    if (!pickedImage.value) isValid = false
    if (!name.value) isValid = false
    if (!category.value) isValid = false
    // if (!line.value) isValid = false
    if (!grade.value) isValid = false
    if (!individual.value) isValid = false
    if (individual.value == "گروهی" && !partners.value) isValid = false
    if (!description.value) isValid = false

    if (!isValid) return

    let formData = new FormData()
    
    formData.append("name", name.value);
    formData.append("category_id", categories.indexOf(category.value) + 1);
    formData.append("line_id", 5);
    formData.append("grade_id", grades.indexOf(grade.value) + 1);
    formData.append("individual", types.indexOf(individual.value));
    formData.append("partners", partners.value);
    formData.append("description", description.value);
    formData.append("file", file.value);
    formData.append("file_image", pickedImage.value);
    formData.append("_method", "put");

    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }

    research.updateResearch(formData)
}

</script>

<style scoped>
input[type=file],
/* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button {
    /* chromes and blink button */
    cursor: pointer;
}
</style>