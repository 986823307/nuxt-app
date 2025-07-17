const locales = [
    {
        code: 'en',
        file: 'en.json',
        name: 'English',
        language: 'en-US',
        iso: 'en-US',
    },
    {
        code: 'zh-CN',
        file: 'zh-CN.json',
        name: '简体中文',
        language: 'zh-CN',
        iso: 'zh-CN',
    },
    {
        code: 'jp',
        file: 'jp.json',
        name: '日本語',
        language: 'ja-JP',
        iso: 'ja-JP',
    },
]

export const currentLocales = locales
export const currentLocaleCodes = locales.map(l => l.code)
