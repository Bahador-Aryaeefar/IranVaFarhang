<template>
    <div dir="rtl" class="font-Yekan pb-[40rem]">
        <MainNavbar></MainNavbar>
        <slot />
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'bg-[#F5F6FA]'
    }
})
</script>

<style>
body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>