<script lang="ts" setup>
import { CalendarIcon } from 'lucide-vue-next'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'

const { user, clear: clearSession } = useUserSession()

async function logout() {
    await clearSession()
    await navigateTo('/login')
}
</script>

<template>
  <AlertDialog>
    <HoverCard>
      <HoverCardTrigger as-child>
        <Avatar>
          <AvatarImage
            class="h-full w-full rounded-[inherit] object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <AvatarFallback
            class="text-grass11 dark:text-stone-300 leading-1 flex h-full w-full items-center justify-center bg-white dark:bg-stone-800 text-sm font-medium"
            :delay-ms="600"
          >
            CT
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent align="end" side="bottom">
        <div class="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              class="h-full w-full rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <AvatarFallback
              class="text-grass11 dark:text-stone-300 leading-1 flex h-full w-full items-center justify-center bg-white dark:bg-stone-800 text-sm font-medium"
              :delay-ms="600"
            >
              CT
            </AvatarFallback>
          </Avatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">
              {{ user?.name }}
            </h4>
            <p class="text-sm">
              这个人很懒,简介什么都没有呀...
            </p>
            <div class="flex items-center pt-2">
              <CalendarIcon class="mr-2 h-4 w-4 opacity-70" />
              <span class="text-xs text-muted-foreground">
                加入时间：2025-01-01
              </span>
            </div>
            <Separator class="my-2" />
            <div class="flex h-4 items-center text-xs">
              <Button variant="link">
                个人中心
              </Button>
              <Separator orientation="vertical" />

              <AlertDialogTrigger>
                <Button variant="link">
                  登出
                </Button>
              </AlertDialogTrigger>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>确定要登出吗?</AlertDialogTitle>
        <AlertDialogDescription>
          登出后,您将需要重新登录.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>取消</AlertDialogCancel>
        <AlertDialogAction @click="logout">
          登出
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style>

</style>
