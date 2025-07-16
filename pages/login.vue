<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'

useSeoMeta({
    title: '登录',
    ogTitle: '登录',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://picsum.photos/seed/picsum/200/300',
    twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 md:p-10">
    <div class="w-full max-w-sm md:max-w-3xl">
      <LoginForm />
    </div>
  </div>
</template>

<style>

</style>
