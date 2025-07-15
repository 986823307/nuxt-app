export default defineEventHandler(async (event) => {
    // 确认用户已登录
    // 若请求未来自有效用户会话，将抛出 401 错误
    const { user } = await requireUserSession(event)

    // TODO: 根据用户获取一些统计数据

    return {}
})
