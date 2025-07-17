import { currentLocales } from './currentLocales'
import en from './locales/en.json'
import jp from './locales/jp.json'
import zhCN from './locales/zh-CN.json'

export default defineI18nConfig(() => {
    return {
        legacy: false,
        // vue-i18n 选项
        locale: 'en',
        fallbackLocale: 'en',
        availableLocales: currentLocales.map(l => l.code),
        messages: {
            en,
            'zh-CN': zhCN,
            'zh': zhCN,
            jp,
        },
    }
})
