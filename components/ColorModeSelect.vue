<script lang="ts" setup>
const colorMode = useColorMode()
const { t } = useI18n()
const colorModes = computed(() => [t('colorMode.light'), t('colorMode.dark'), t('colorMode.sepia'), t('colorMode.system')])
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UButton
        icon="i-lucide-contrast"
        color="neutral"
        variant="ghost"
      >
        {{ colorMode.preference }}
      </UButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="$colorMode.preference">
        <DropdownMenuRadioItem v-for="i in colorModes" :key="i" :value="i">
          {{ i }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
