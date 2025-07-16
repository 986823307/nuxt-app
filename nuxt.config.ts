// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            version: '1.0.0',
        },
    },
    modules: ['@nuxt/eslint', '@nuxt/scripts', [
        '@pinia/nuxt',
        {
            autoImports: [
                // 自动引入 `defineStore()`
                'defineStore',
                // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
                ['defineStore', 'definePiniaStore'],
            ],
        },
    ], 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt', 'shadcn-nuxt', 'nuxt-auth-utils', '@nuxt/ui', '@nuxtjs/color-mode'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
    piniaPluginPersistedstate: {
        storage: 'cookies',
        cookieOptions: {
            sameSite: 'lax',
        },
        debug: true,
        key: 'prefix_%id_postfix',
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    ui: {
        // 禁用google字体，以免启动项目国内获取慢堵塞项目启动
        fonts: false,
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Nuxt', // 默认回退标题
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storage: 'cookie', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode',
    },
})
