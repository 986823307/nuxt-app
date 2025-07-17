export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(`${import.meta.client ? '客户端' : '服务端'}前往路由:`, to.fullPath)
    // console.log(`${import.meta.client ? '客户端' : '服务端'}来源路由:`, from.fullPath)
    const { loggedIn } = useUserSession()
    // 兼容i18n路由
    const localeRoute = useLocaleRoute()

    if (to.fullPath === '/.well-known/appspecific/com.chrome.devtools.json') {
        return
    }

    // 已登录用户访问登录页则重定向到首页
    if (loggedIn.value && to.path === localeRoute({ name: 'login' })?.path) {
        return navigateTo(localeRoute({ path: '/' })?.fullPath)
    }

    // 未登录用户访问非登录页则重定向到登录页
    if (!loggedIn.value && to.path !== localeRoute({ name: 'login' })?.path) {
        return navigateTo(localeRoute({ name: 'login', query: { redirectUrl: localeRoute({ ...to })?.fullPath } })?.fullPath)
    }
})
