<template>
    <div class="mx-10 mobile:mx-6">
        <User></User>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
</script>