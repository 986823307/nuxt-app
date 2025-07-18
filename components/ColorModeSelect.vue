<script lang="ts" setup>
const colorMode = useColorMode()
const { t } = useI18n()
const colorModes = computed(() => [{
    label: t('colorMode.light'),
    value: 'light',
}, {
    label: t('colorMode.dark'),
    value: 'dark',
}, {
    label: t('colorMode.sepia'),
    value: 'sepia',
}, {
    label: t('colorMode.system'),
    value: 'system',
}])
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UButton
        icon="i-lucide-contrast"
        color="neutral"
        variant="ghost"
      >
        {{ $t(`colorMode.${colorMode.preference}`) }}
      </UButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="$colorMode.preference">
        <DropdownMenuRadioItem v-for="i in colorModes" :key="i.value" :value="i.value">
          {{ i.label }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
