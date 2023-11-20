<template>
    <div>
        <!-- <img class="w-8" src="/icons/profile/star.svg" alt="star"> -->

        <div class="mt-10 flex items-end justify-center max-w-[35rem] mx-auto items-center">
            <div class="text-center text-black font-bold text-2xl shrink-0">
                <div class="w-[7rem] h-[7rem] rounded-full mx-auto border-[0.25rem] border-[#1DA8A6] shadow-md bg-contain bg-center bg-white mb-4 bg-no-repeat"
                    style="background-image: url('/images/profile/profile.png'); background-size: 70%;"></div>
                {{ (user.name + ' ' + ((user.last_name) ? user.last_name : '')) }}
            </div>
        </div>

        <div class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">درباره من</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>

            <div class="mt-6">
                <ul v-if="myState == 1" class="text-xl text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کد پرسنلی :
                        {{ user.personal_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        کد ملی :
                        {{ user.national_code }}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        استان :
                        {{ cities.searchProvince(user.province_id)?.title}}
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        شهر :‌ 
                        {{ cities.searchCity(user.city_id)?.title }}
                    </li>
                </ul>

                <ul v-else-if="myState == 2" class="text-lg text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        پانزده سال سابقه تدریس به عنوان آموزگار از سال 87
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        همکاری با بنیاد نخبگان از سال 96
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        همکاری با شرکت سانا فناوری سورنا به عنوان محقق از سال 98
                    </li>
                </ul>

                <ul v-else-if="myState == 3" class="text-lg text-black space-y-3">
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        ایمیل :
                        <span>mostafatabrizi@gmail.com</span>
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        ایتا :
                        <span>@mostafatabrizi1402</span>
                    </li>
                    <li class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#1DA8A6] mt-2 shrink-0"></div>
                        تلگرام :
                        <span>@mostafatabrizi1402</span>
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="false" class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">آثار</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>
            <div class="flex items-center gap-4 mt-6">
                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 1"
                    :class="bookState == 1 ? 'bg-[#1DA8A6] text-white' : 'text-black'">کتاب (2)</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 2"
                    :class="bookState == 2 ? 'bg-[#1DA8A6] text-white' : 'text-black'">مقاله (4)</button>

                <div class="h-8 rounded-full w-[0.125rem] bg-[#21C2C0]"></div>

                <button class="h-10 rounded-full w-full text-xl font-bold" @click="bookState = 3"
                    :class="bookState == 3 ? 'bg-[#1DA8A6] text-white' : 'text-black'">تجربه برتر (1)</button>
            </div>

            <div class="mt-12 space-y-8">
                <ProfileBook url="/images/books/book1.png" title="درمان اختلالات ریاضی" subject="ریاضی"
                    age="سنین 12 تا 18 سال" summary="درمان اختلالات ریاضی کتابی است از دکتر  که مولفان آن را"
                    name="دکتر مصطفی تبریزی" star="4.8">
                </ProfileBook>
                <ProfileBook url="/images/books/book2.png" title="تولد دوباره زمان" subject="فیزیک" age="تمام سنین"
                    summary="در این کتاب سعی به عمل آمده که شرح کلی از روابط اعداد" name="دکتر مصطفی تبریزی" star="3.9">
                </ProfileBook>
            </div>
        </div>

        <div v-if="false" class="mt-16 max-w-[50rem] mx-auto">
            <div class="text-black font-bold text-2xl text-center">افتخارات</div>
            <div class="mt-6 h-[0.125rem] rounded-full bg-[#21C2C0]"></div>

            <div class="mt-12 space-y-12">
                <ProfileTop class="w-full" color="bg-[#FFC105]" profile="/images/profile/first.png"
                    eye="/icons/landing/first.png" name="درمان اختلالات ریاضی" title="مقام نخست اقدام پژوهی کشور"
                    year="1401"></ProfileTop>
                <ProfileTop class="w-full" color="bg-[#D2D2D2]" profile="/images/profile/second.png"
                    eye="/icons/landing/second.png" name="تولد دوباره زمان" title="مقام دوم اقدام پژوهی استان کرمانشاه"
                    year="1400"></ProfileTop>
                <ProfileTop class="w-full" color="bg-[#D66E40]" profile="/images/profile/third.png"
                    eye="/icons/landing/third.png" name="استدلال استنتاجی" title="مقام سوم اقدام پژوهی استان کرمانشاه"
                    year="1399"></ProfileTop>
            </div>
        </div>

        <ProfileAuth class="mt-10 max-w-[50rem] shadow-md"></ProfileAuth>
    </div>
</template>

<script setup>

const score = ref(0)
const cities = useCities()

if (cities.cities.value == null) {
    cities.getCities()
}

const myState = ref(1)
const bookState = ref(1)
const { user } = useUser()

// {
//     "id": 20,
//     "name": "dabir",
//     "last_name": null,
//     "national_code": null,
//     "personal_code": null,
//     "tell": null,
//     "mobile": null,
//     "work_experience": null,
//     "degree_education": null,
//     "discipline": null,
//     "current_position": null,
//     "province_id": null,
//     "city_id": null,
//     "status": null,
//     "profile_photo_path": null,
//     "presenter": 0,
//     "judge_province": 0,
//     "judge_another_province": 0,
//     "maneger": 0,
//     "gender": 0,
//     "telegram": null,
//     "instagram": null,
//     "eita": null,
//     "rubika": null,
//     "email": "dabir@dabir.com",
//     "email_verified_at": null,
//     "created_date": "1402/08/21",
//     "created_at": "2023-11-12T08:48:20.000000Z",
//     "updated_at": "2023-11-12T08:48:20.000000Z"
// }

</script>
