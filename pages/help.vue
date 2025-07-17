<script lang="ts" setup>
definePageMeta({
    title: 'pages.title.help',
})

const { t } = useI18n()

useSeoMeta({
    description: t('pages.help.description'),
})
</script>

<template>
  <div>
    {{ $t('help') }}
  </div>
</template>

<style>

</style>
