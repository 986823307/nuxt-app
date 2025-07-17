<script lang="ts" setup>
definePageMeta({
    title: 'pages.title.user',
})

const { t } = useI18n()

useSeoMeta({
    description: t('pages.user.description'),
})
</script>

<template>
  <div>
    {{ $t('userCenter') }}
  </div>
</template>

<style>

</style>
