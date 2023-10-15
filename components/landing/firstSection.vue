<template>
    <div>
        <div class="h-16 bg-white rounded-full flex items-center shadow-sm">
            <input class="grow h-full text-black focus:outline-none placeholder:text-[#707070] bg-transparent px-6 text-lg"
                type="text" placeholder="جستجو پیشرفته">
            <img class="w-6 h-6 mx-5" src="/icons/landing/search.png" alt="search">
        </div>

        <div
            class="pb-5 h-[12.5rem] bg-[#E0F2F1] mt-5 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-center text-[#28C0CD] gap-1 text-center">
            <div class="text-[2.375rem] w-full -mr-[1.4rem]" style="letter-spacing: 1.5rem;">1402</div>
            <div class="text-xl w-full">مهار تورم ، رشد تولید</div>
        </div>

        <div class="flex gap-x-2 gap-y-5 mt-5 split:flex-wrap">
            <div class="w-1/2 split:w-full shadow-lg rounded-[1.25rem] overflow-hidden relative font-bold cursor-pointer group"
                @click="navigateTo('/books')" style="background-image: url(''); container-type: inline-size;">
                <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/landing/projects.png"
                    alt="projects">
                <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">کتاب ها و
                    مقالات</span>
            </div>

            <div class="w-1/2 split:w-full shadow-lg rounded-[1.25rem] overflow-hidden relative font-bold cursor-pointer group"
                style="background-image: url(''); container-type: inline-size;">
                <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/landing/teachings.png"
                    alt="teachings">
                <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">تجربه های برتر
                    آموزش</span>
            </div>
        </div>
    </div>
</template>