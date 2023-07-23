<template>
  <Shared.UI.EachFrameHolder>
    <router-view />
  </Shared.UI.EachFrameHolder>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
</script>

<style lang="less">
@import "@shared/ui/setup-tailwind.less";
</style>
