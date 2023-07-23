<template>
  <div class="h-full relative">
    <router-view />
  </div>
</template>

<style lang="less">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply overflow-x-hidden overflow-y-auto h-screen antialiased relative;
}
</style>
