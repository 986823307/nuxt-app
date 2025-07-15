export default defineNuxtRouteMiddleware((to) => {
    const { loggedIn } = useUserSession()

    // 已登录用户访问登录页则重定向到首页
    if (loggedIn.value && to.path === '/login') {
        return navigateTo('/')
    }

    // 未登录用户访问非登录页则重定向到登录页
    if (!loggedIn.value && to.path !== '/login') {
        return navigateTo('/login')
    }
})
