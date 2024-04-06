export default defineNuxtRouteMiddleware(async(to, from) => {
      let login
      if(useAuth()) login = useAuth()
      else return navigateTo('/auth')
      let user = useUser()
      if (login.isLogin()) {
            if(user.user.value) return
            else return await user.getUser()
      }
      else return navigateTo('/auth')
})
