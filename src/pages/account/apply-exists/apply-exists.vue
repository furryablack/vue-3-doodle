<template>
  <div class="grid gap-y-8">
    <Shared.UI.Form.Input
      label="Email"
      name="email"
      placeholder="your@mail.com"
    />

    <Shared.UI.Form.Input
      label="Password"
      name="password"
      type="password"
    />
  </div>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
</script>