<script setup>
import "./style.css";
</script>

<template>
  <div id="app-container">
    <slot />
  </div>
</template>

<style>
#app-container {
  --transition-duration: 0.15s;
  --transition-timing-function: ease-in;

  @apply h-full w-full;
}

#app-container,
#app-container * {
  transition: all var(--transition-duration) var(--transition-timing-function);
}
</style>
