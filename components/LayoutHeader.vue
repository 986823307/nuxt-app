<script lang="ts" setup>
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const { loggedIn } = useUserSession()
const { locale, locales, setLocale } = useI18n()
const currentLocale = ref(locale.value)
</script>

<template>
  <!-- 公共头部 -->
  <div class="border-b border-default border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex justify-between items-center px-20 py-4 gap-3">
      <div class="flex-1">
        LOGO
      </div>
      <HeaderMenu />
      <!-- 右侧按钮部分 -->
      <div class="flex items-center gap-2 flex-1 justify-end">
        <!-- 主题切换按钮 -->
        <ColorModeSelect />
        <!-- 语言切换按钮 -->
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <UButton
              icon="i-lucide-languages"
              color="neutral"
              variant="ghost"
            >
              {{ locales[locales.findIndex(l => l.code === locale)].name }}
            </UButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup v-model="currentLocale">
              <DropdownMenuRadioItem v-for="l in locales" :key="l.code" :value="l.code" @click="setLocale(l.code)">
                {{ l.name }}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <!-- 客服按钮 -->
        <UButton
          icon="i-lucide-message-circle-more"
          color="neutral"
          variant="ghost"
        />
        <!-- 用户头像 -->
        <UserAvatar v-if="loggedIn" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
