<script lang="ts" setup>
useSeoMeta({
    title: '首页',
    ogTitle: '首页',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://picsum.photos/seed/picsum/200/300',
    twitterCard: 'summary_large_image',
})

// 页面级捕获异常
onErrorCaptured((e) => {
    console.error('onErrorCaptured', e)
})

const { user, clear: clearSession } = useUserSession()

function throwClientError() {
    throw new Error('测试异常')
}

async function throwServerError() {
    const data = await $fetch('/api/test')
    console.log(data)
}

async function logout() {
    await clearSession()
    await navigateTo('/login')
}
</script>

<template>
  <div>
    <h1>{{ user?.name }}</h1>
    <h1>{{ user?.token }}</h1>
    <Button @click="throwClientError">
      客户端异常模拟
    </Button>
    <Button @click="throwServerError">
      服务端API请求模拟
    </Button>
    <Button @click="logout">
      用户登出
    </Button>
  </div>
</template>

<style lang="scss" scoped>

</style>
