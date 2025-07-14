export const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
        userInfo: null,
    }),
    actions: {

    },
    persist: {
        pick: [
            {
                pick: ['token'],
                storage: piniaPluginPersistedstate.cookies(),
            },
            {
                pick: ['user'],
                storage: sessionStorage,
            },
        ],
    },
})
