import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { default as AreasFrame } from './areas-frame.vue';

vi.mock('vue-router');

describe('AreasFrame component', () => {
  it('exists', async () => {
    const wrapper = mount(AreasFrame, {
      global: {
        stubs: ['router-view'],
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
