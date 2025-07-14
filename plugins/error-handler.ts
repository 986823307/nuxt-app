export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('vue:error', (error, instance, info) => {
        // 处理错误
        console.error(`${import.meta.client ? '客户端' : '服务端'}捕捉到的异常信息`, error)
        console.log('instance', instance)
        console.log('info', info)
    })
})
