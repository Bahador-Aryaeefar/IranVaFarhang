<template>
    <div class="max-w-[40rem] mx-auto">
        <div
            class="bg-white rounded-full shadow-md flex items-center justify-center text-black text-[1.75rem] font-bold h-16">
            تاریخچه رویداد ها
        </div>

        <div v-if="false" class="w-full shadow-md rounded-[2rem] overflow-hidden relative font-bold cursor-pointer group mx-auto mt-8" @click="navigateTo('/projects/research')"
            style="background-image: url(''); container-type: inline-size;">
            <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/projects/research.png"
                alt="projects">
            <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">
                اقدام پژوهی
                <span class="text-[3.5cqw] font-normal">(2)</span>
            </span>
        </div>

        <NuxtLink to="/projects/research" class="block w-full shadow-md rounded-[2rem] overflow-hidden relative font-bold cursor-pointer group mx-auto mt-8"
            style="background-image: url(''); container-type: inline-size;">
            <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/projects/books.png"
                alt="projects">
            <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">
                آثار
            </span>
        </NuxtLink>

        <div v-if="false" class="w-full shadow-md rounded-[2rem] overflow-hidden relative font-bold cursor-pointer group mx-auto mt-8"
            style="background-image: url(''); container-type: inline-size;">
            <img class="w-full group-hover:scale-[104%] transition-all duration-500" src="/images/projects/best.png"
                alt="projects">
            <span class="text-black absolute left-[10%] top-0 bottom-0 my-auto text-[5cqw] h-fit">
                تجربه های برتر آموزش
                <span class="text-[3.5cqw] font-normal">(8)</span>
            </span>
        </div>
    </div>
</template>