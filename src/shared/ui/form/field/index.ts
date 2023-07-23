import { defineAsyncComponent } from 'vue';

export const Field = defineAsyncComponent(() => import('./field.vue'));