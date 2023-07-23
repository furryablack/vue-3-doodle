<template>
  <div 
    :class="[!withoutIndent && 'px-2 xs:px-6 sm:px-14']"
  >
    <div 
      class="grid mx-auto"
      :class="[className, !isFluid && 'container']"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  className?: string,
  isFluid?: boolean,
  withoutIndent?: boolean,
}

const props = withDefaults(defineProps<IProps>(), {
  isFluid: false,
  withoutIndent: false,
});
</script>