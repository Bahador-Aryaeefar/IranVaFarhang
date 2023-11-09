<template>
    <div class="mx-10 mobile:mx-6">
        <Book></Book>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
</script>