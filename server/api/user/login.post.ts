import { z } from 'zod'

const bodySchema = z.object({
    email: z.string().email('请输入有效的邮箱'),
    password: z.string().min(6, '密码不少于6个字数'),
})

export default defineEventHandler(async (event) => {
    // 调用 `useTranslation`，它将返回翻译函数
    const t = await useTranslation(event)

    // 使用h3内置api和zod进行请求体校验
    const { email, password } = await readValidatedBody(event, bodySchema.parse)

    if (email === '986823307@qq.com' && password === '111222') {
        // 设置用户会话到 Cookie
        // 该服务器工具由 auth-utils 模块自动导入
        await setUserSession(event, {
            user: {
                name: email,
                token: 'WGuoay6F9XeSxrOUiHPYdQMsIvfqw02LpKZ1CgAjnDlbVR5hBET7JkmzN83t4ct4APgHUk5rbOMgF1BuGT8lmXTfaJSTqomphLDkcEUDCK9TM5l2j5Iscw23xiTMoSWp',
            },
        })
        return {}
    }
    throw createError({
        statusCode: 401,
        message: t('loginInfoWrong'),
    })
})
