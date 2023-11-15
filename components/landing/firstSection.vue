<template>
    <div>
        <div class="h-16 bg-white rounded-full flex items-center shadow-sm">
            <input class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                type="text" placeholder="جستجو پیشرفته">
            <img class="w-6 h-6 mx-5" src="/icons/landing/search.png" alt="search">
        </div>

        <div
            class="pb-5 h-[12.5rem] bg-[#E0F2F1] mt-5 rounded-[2.5rem] shadow-md flex flex-col items-center justify-center text-[#28C0CD] gap-1 text-center">
            <div class="text-[2.375rem] w-full -mr-[1.4rem]" style="letter-spacing: 1.5rem;">1402</div>
            <div class="text-xl w-full">مهار تورم ، رشد تولید</div>
        </div>

        <div class="flex gap-x-5 gap-y-5 mt-5 flex-wrap items-center justify-center">
            <div class="w-[calc(50%-1.25rem)] shrink-0 split:w-full shadow-md rounded-[1.25rem] overflow-hidden relative font-bold cursor-pointer group"
                @click="navigateTo('/books')" style="container-type: inline-size;">
                <!-- <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/landing/projects.png"
                    alt="projects"> -->
                <div class="h-[30cqw] w-full group-hover:scale-[104%] bg-cover transition-transform duration-500 bg-right-bottom"
                    style="background-image: url('/images/landing/projects.png');"></div>
                <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">مشاهده آثار</span>
            </div>

            <NuxtLink to="/projects/research" v-if="user?.role_id <= 5" class="w-[calc(50%-1.25rem)] shrink-0 split:w-full shadow-md rounded-[1.25rem] overflow-hidden relative font-bold cursor-pointer group"
                style="container-type: inline-size;">
                <!-- <img class="w-full group-hover:scale-[104%]" src="/images/projects/books.png"
        alt="teachings"> -->
                <div class="h-[30cqw] w-full group-hover:scale-[104%] bg-cover transition-transform duration-500 bg-right-bottom"
                    style="background-image: url('/images/projects/books.png');"></div>
                <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">ثبت اثر</span>
            </NuxtLink>
            
            <div v-if="user?.role_id <= 5 && coords.status" class="w-[calc(50%-1.25rem)] shrink-0 split:w-full shadow-md rounded-[1.25rem] overflow-hidden relative font-bold cursor-pointer group"
                @click="navigateTo('/tops')" style="container-type: inline-size;">
                <!-- <img class="w-full group-hover:scale-[104%]" src="/images/landing/teachings.png"
                    alt="teachings"> -->
                <div class="h-[30cqw] w-full group-hover:scale-[104%] bg-cover transition-transform duration-500 bg-right-bottom"
                    style="background-image: url('/images/landing/teachings.png');"></div>

                <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">اقدام پژوهی</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { user, coords } = useUser()
</script>