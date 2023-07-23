<template>
  <Shared.UI.Layout.Section
    class-name="max-w-md"
    height-full
  >
    <div class="my-auto min-h-75">
      <router-view />
    </div>
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
</script>
