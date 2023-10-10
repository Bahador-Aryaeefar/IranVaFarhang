<template>
    <div class="mx-10">
        <div class="bg-white rounded-[2rem] shadow-xl pt-8 pb-8 max-w-[60rem] mx-auto">
            <div class="text-[3rem] font-bold text-[#2D2D2D] text-center">20,037</div>
            <div class="text-[2rem] text-[#2B2B2B] text-center">تعداد آثار</div>

            <div class="w-[90%] h-[0.125rem] bg-[#26C3C2] rounded-full mt-8 mx-auto"></div>

            <div class="flex items-center mt-12 text-center">
                <div class="w-1/3">
                    <div class="text-[1.75rem] text-[#2D2D2D] font-bold">3075</div>
                    <div class="text-2xl text-[#2B2B2B]">کتاب ها</div>
                </div>

                <div class="h-12 w-[0.125rem] bg-[#26C3C2] rounded-full"></div>

                <div class="w-1/3">
                    <div class="text-[1.75rem] text-[#2D2D2D] font-bold">12042</div>
                    <div class="text-2xl text-[#2B2B2B]">مقالات</div>
                </div>

                <div class="h-12 w-[0.125rem] bg-[#26C3C2] rounded-full"></div>

                <div class="w-1/3">
                    <div class="text-[1.75rem] text-[#2D2D2D] font-bold">5020</div>
                    <div class="text-2xl text-[#2B2B2B]">تجربه های برتر</div>
                </div>
            </div>
        </div>

        <div class="max-w-[60rem] mx-auto">
            <div class="text-center text-[2rem] font-bold mt-20">نمودار آثار استان ها</div>

            <div class="h-[0.125rem] rounded-full bg-[#60D3D2] mt-5"></div>

            <div class="h-20 rounded-full bg-white flex justify-between px-12 items-center shadow-xl mt-5">
                <span class="text-black font-bold text-[1.75rem]">کرمانشاه</span>
                <div class="flex items-center gap-3 text-black font-bold text-2xl">
                    2,137
                    <img class="w-10 cursor-pointer" src="/icons/landing/pen.svg" alt="pen">
                </div>
            </div>

            <div class="bg-white rounded-[2rem] pt-2 mt-4 shadow-xl">
                <div class="mx-auto w-fit relative">
                    <div
                        class="relative text-[1.5rem] font-bold text-[#444444] flex w-fit rounded-[0.75rem] items-center justify-center bg-[#F9F9F9] px-10 h-10 cursor-pointer">
                        <span class="pl-1">1400</span>
                        <img class="absolute w-[1.125rem] left-3 top-0 bottom-0 my-auto pt-0.5"
                            src="/icons/landing/down.svg" alt="down">
                    </div>
                </div>

                <div class="mt-6 pt-4 pb-[5rem] relative">
                    <div class="relative flex flex-row-reverse text-[#444444] text-base items-center pl-4 pr-16 gap-2">
                        <span class="text-center w-16">2000</span>
                        <div class="grow h-[0.125rem] bg-[#707070] rounded-full"></div>
                    </div>

                    <div class="relative flex flex-row-reverse text-[#444444] text-base items-center pl-4 pr-16 gap-2 mt-8">
                        <span class="text-center w-16">1000</span>
                        <div class="grow h-[0.125rem] bg-[#707070] rounded-full"></div>
                    </div>

                    <div class="relative flex flex-row-reverse text-[#444444] text-base items-center pl-4 pr-16 gap-2 mt-8">
                        <span class="text-center w-16">0</span>
                    </div>

                    <div class="absolute w-full h-full top-0 left-0">
                        <div class="items-end pb-[5.5rem] ml-[5.5rem] h-full mr-16 flex justify-between flex-row-reverse">
                            <div class="h-full w-4 bg-[#64D4CE] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">تهران</span>
                            </div>

                            <div class="h-[90%] w-4 bg-[#72DFDA] rounded-full relative border-[0.125rem] border-[#1FB6EF]">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">کرمانشاه</span>
                            </div>

                            <div class="h-[80%] w-4 bg-[#72DFDA] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">فارس</span>
                            </div>

                            <div class="h-[80%] w-4 bg-[#72DFDA] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">اصفهان</span>
                            </div>

                            <div class="h-[75%] w-4 bg-[#84E6E1] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">کردستان</span>
                            </div>

                            <div class="h-[70%] w-4 bg-[#84E6E1] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">گلستان</span>
                            </div>

                            <div class="h-[65%] w-4 bg-[#92ECE8] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">قم</span>
                            </div>

                            <div class="h-[60%] w-4 bg-[#92ECE8] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">همدان</span>
                            </div>

                            <div class="h-[58%] w-4 bg-[#ADEBE7] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">قزوین</span>
                            </div>

                            <div class="h-[50%] w-4 bg-[#BCF5F1] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">کرج</span>
                            </div>

                            <div class="h-[45%] w-4 bg-[#CAFBF7] rounded-full relative">
                                <span
                                    class="absolute -bottom-7 text-[#434343] text-sm -left-1.5 right-0 mx-auto block text-center -rotate-90 whitespace-nowrap">هرمزگان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>