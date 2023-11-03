<template>
    <div class="mx-6">
        <Auth></Auth>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    // middleware: ["auth"]
})

const auth = useAuth()

// auth.login({
//     email: "test@me.com",
//     password: "test",
//     name: "test",
//     gender: "male"
// })
</script>