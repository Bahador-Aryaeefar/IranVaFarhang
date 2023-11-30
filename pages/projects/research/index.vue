<template>
    <div class="mx-10 mobile:mx-6">
        <ProjectsResearches class="mt-8"></ProjectsResearches>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const {coords} = useUser()
if(![1,2].includes(coords.value.status)) navigateTo('/')
</script>