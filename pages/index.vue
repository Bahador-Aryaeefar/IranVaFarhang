<template>
    <div>
        <LandingFirstSection class="mt-4"></LandingFirstSection>
        <LandingBooks class="mt-20"></LandingBooks>
        <LandingVideos class="mt-10"></LandingVideos>
        <LandingTops class="mt-10"></LandingTops>
        <LandingStats class="mt-[7rem]"></LandingStats>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    // middleware: ["auth"]
})
</script>