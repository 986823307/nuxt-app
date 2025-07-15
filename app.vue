<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

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
    <Toaster />
    <nuxt-page />
  </nuxt-layout>
</template>
