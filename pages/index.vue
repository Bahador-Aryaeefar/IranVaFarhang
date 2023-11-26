<template>
    <div class="mx-10 mobile:mx-6">
        <LandingFirstSection class="mt-4"></LandingFirstSection>
        <LandingBooks v-if="false" class="mt-20"></LandingBooks>
        <LandingVideos v-if="false" class="mt-10"></LandingVideos>
        <LandingTops v-if="false" class="mt-10"></LandingTops>
        <LandingStats v-if="false" class="mt-[7rem]"></LandingStats>
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