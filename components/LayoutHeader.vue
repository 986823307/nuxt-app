<script lang="ts" setup>
const { loggedIn } = useUserSession()
</script>

<template>
  <!-- 公共头部 -->
  <div class="border-b border-default border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex justify-between items-center px-20 py-4">
      <div>
        LOGO
      </div>
      <HeaderMenu />
      <!-- 右侧按钮部分 -->
      <div class="flex items-center gap-2">
        <!-- 主题切换按钮 -->
        <ColorModeButton />
        <!-- 客服按钮 -->
        <UButton
          icon="i-lucide-message-circle-more"
          color="neutral"
          variant="ghost"
        >
          客服
        </UButton>
        <!-- 用户头像 -->
        <UserAvatar v-if="loggedIn" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
