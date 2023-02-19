<script lang="ts" setup>
  import { computed, inject } from 'vue';
  import type { NavigationItemLabel, SidebarContext } from './types';

  interface Props {
    id: NavigationItemLabel;
  }

  const props = defineProps<Props>();

  const { activeItem } = inject<SidebarContext>('lb-sidebar')!;

  const isActive = computed(() => activeItem.value === props.id);
</script>

<template>
  <li class="nav-item" :class="{ active: isActive }">
    <slot />
  </li>
</template>

<style scoped>
  li > :global(*) {
    @apply flex cursor-pointer items-center rounded-[4px] px-3 py-[18px];
  }

  li.active {
    @apply bg-[#F2E2FF] text-primary-dark;
  }
</style>
