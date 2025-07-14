<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName'
    },
    templateParams: {
        siteName: 'NUXT',
        separator: '-',
    },
})
</script>

<template>
  <NuxtLoadingIndicator />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
