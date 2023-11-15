<template>
    <div class="mx-10 mobile:mx-6">
        <LandingFirstSection class="mt-4"></LandingFirstSection>
        <LandingBooks class="mt-20"></LandingBooks>
        <LandingVideos class="mt-10"></LandingVideos>
        <LandingTops v-if="false" class="mt-10"></LandingTops>
        <LandingStats class="mt-[7rem]"></LandingStats>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: ["auth"]
})

const auth = useAuth()

// auth.login({
//     email: "test@me.com",
//     password: "test",
//     name: "test",
//     gender: "male"
// })
</script>