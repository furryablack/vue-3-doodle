<template>
  <Shared.UI.EachFrameHolder>
    <router-view />
  </Shared.UI.EachFrameHolder>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
</script>

<style lang="less">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply overflow-x-hidden overflow-y-auto min-h-screen antialiased;
}
</style>
