<template>
    <div class="mx-10 mobile:mx-6">
        <Projects class="mt-8">
        </Projects>
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