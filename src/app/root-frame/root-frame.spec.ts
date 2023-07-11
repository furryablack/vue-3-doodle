import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { default as RootFrame } from './root-frame.vue';

vi.mock('vue-router');

describe('RootFrame component', () => {
  it('exists', async () => {
    const wrapper = mount(RootFrame, {
      global: {
        stubs: ['router-view'],
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
