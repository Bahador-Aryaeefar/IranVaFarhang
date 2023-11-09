<template>
    <div class="mx-10 mobile:mx-6">
        <ProjectsNew class="mt-8"></ProjectsNew>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})
</script>