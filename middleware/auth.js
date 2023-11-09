export default defineNuxtRouteMiddleware(async(to, from) => {
      const login = useAuth()
      if (login.isLogin()) {
           return 
      }
      return navigateTo('/auth')
})
