<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'

definePageMeta({
    title: 'pages.title.login',
})
const { t } = useI18n()

useSeoMeta({
    description: t('pages.login.description'),
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
