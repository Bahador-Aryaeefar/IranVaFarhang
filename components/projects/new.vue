<template>
    <div>
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            ثبت اقدام پژوهی جدید
        </div>

        <div class="mt-20 text-[#707070] max-w-[50rem] mx-auto space-y-20">
            <div>
                <div class="text-2xl font-bold text-center">
                    نام اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <input
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center shadow-md"
                    type="text" placeholder="نام اثر را وارد کنید">
            </div>

            <div>
                <div class="text-2xl font-bold text-center">
                    موضوع اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <div class="mt-2">
                    <div
                        class="h-16 w-full bg-white rounded-full focus:outline-none px-8 text-[#000000] text-xl flex items-center justify-center relative cursor-pointer shadow-md">
                        ریاضی
                        <img class="absolute left-8 top-0 bottom-0 my-auto h-5 pt-1" src="/icons/projects/down.svg"
                            alt="down">
                    </div>
                </div>
            </div>

            <div>
                <div class="text-2xl font-bold text-center">
                    چکیده اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <textarea
                    class="h-[15rem] min-h-20 w-full bg-white rounded-[3rem] focus:outline-none px-8 py-3 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center shadow-md"
                    placeholder="چکیده اثر را وارد کنید"></textarea>
            </div>

            <div>
                <div class="text-2xl font-bold text-center">
                    رده سنی مخاطب اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <input
                    class="h-16 w-full bg-white rounded-full focus:outline-none px-8 mt-2 placeholder:text-[#707070] text-[#000000] text-xl text-center shadow-md"
                    type="text" placeholder="رده سنی را وارد کنید">
            </div>

            <div>
                <div class="text-2xl font-bold text-center">
                    بارگذاری اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <button class="h-16 w-full bg-[#21C2C0] rounded-full text-white text-xl shadow-md mt-2">انتخاب فایل</button>
            </div>



            <div>
                <div class="text-2xl font-bold text-center">
                    بارگذاری تصویر اثر
                </div>

                <div class="h-[0.125rem] rounded-full bg-[#21C2C0] mt-2"></div>

                <div class="mt-4 relative cursor-pointer w-fit mx-auto">
                    <img class="w-[15rem] mx-auto" src="/icons/projects/photo.svg" alt="photo">
                    <div class="absolute w-[4rem] h-[4rem] top-0 bottom-0 left-0 right-0 m-auto">
                        <div class="h-full w-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                        <div class="w-full h-2 bg-[#707070] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                    </div>
                </div>
            </div>

            <button class="h-20 rounded-[1.25rem] bg-white text-[#21C2C0] border-[0.125rem] border-[#21C2C0] text-[2rem] font-bold w-full" @click="navigateTo('/projects/research')">ثبت</button>
        </div>
    </div>
</template>