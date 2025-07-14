<script lang="ts" setup>
useSeoMeta({
    title: '首页',
    ogTitle: '首页',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://picsum.photos/seed/picsum/200/300',
    twitterCard: 'summary_large_image',
})

function throwClientError() {
    throw new Error('测试异常')
}
async function throwServerError() {
    const data = await $fetch('/api/test')
    console.log(data)
}

onErrorCaptured((e) => {
    console.error('onErrorCaptured', e)
})
</script>

<template>
  <div>
    首页
    <Button @click="throwClientError">
      客户端异常模拟
    </Button>
    <Button @click="throwServerError">
      服务端异常模拟
    </Button>
  </div>
</template>

<style lang="scss" scoped>

</style>
