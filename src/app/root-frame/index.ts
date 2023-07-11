import { defineAsyncComponent } from 'vue';

export const RootFrame = defineAsyncComponent(() => import('./root-frame.vue'));
