<template>
  <Shared.UI.Form.Field 
    :name="name" 
    :class-name="className" 
    :is-disabled="isDisabled"
    :errors="errors"
    :label="label"
  >
    <input 
      class="
        w-full px-6 rounded-md bg-e4e4e4 bg-opacity-50 focus:bg-opacity-30
        focus:border-e4e4e4 focus:border-2 outline-none h-14 text-16 leading-6
      "
      
      :name="name"
      :is-disabled="isDisabled"
      :placeholder="placeholder"
      :type="type"
    >
  </Shared.UI.Form.Field>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';

export interface IProps {
  className?: string,
  name: string,
  placeholder?: string,
  type?: string,
  label?: string,
  isDisabled?: boolean,
  errors?: string[],
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
  type: 'text',
  isDisabled: false,
  placeholder: undefined,
  label: undefined,
  errors: () => [],
});
</script>