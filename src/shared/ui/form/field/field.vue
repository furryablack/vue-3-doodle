<template>
  <label
    class="grid gap-y-3 relative opacity-50" 

    :class="[
      isDisabled && 'opacity-40 pointer-events-none',
      className,
    ]"
  >
    <span
      v-if="label"
      class="text-16 leading-4 font-semibold"
    >
      {{ label }}
    </span>

    <template v-if="errors.length">
      <p class="absolute top-full text-14 text-ab1a1a">
        {{ error }}
      </p>
    </template>

    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

export interface IProps {
  className?: string,
  isDisabled?: boolean,
  label?: string,
  errors?: string[],
  name: string,
}

const props = withDefaults(defineProps<IProps>(), {
  className: undefined,
  isDisabled: false,
  label: undefined,
  errors: () => [],
});

const error = computed(() => props.errors[0]);
</script>