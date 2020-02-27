import { shallowMount, mount } from "@vue/test-utils";
import Parent from '@/components/Parent'

describe('Parent.vue', () => {
  it('should render parent compnent', () => {
    const shallowWrapper = shallowMount(Parent);
    const mountWrapper = mount(Parent);

    console.log('Shallow Wrapper Parent', shallowWrapper.html());
    console.log('Mount Wrapper Parent', mountWrapper.html());
  })
})
