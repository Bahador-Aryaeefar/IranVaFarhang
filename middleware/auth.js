export default defineNuxtRouteMiddleware(async(to, from) => {
      const login = useAuth()
      const user = useUser()
      if (login.isLogin()) {
            if(user.user.value) return
            else await user.getUser()
      }
      else navigateTo('/auth')
})
