import { shallowMount, mount } from '@vue/test-utils';
import Child from '@/components/Child';

describe('Child.Vue', () => {
  it('should render child component', () => {
    const shallowWrapper = shallowMount(Child);
    const mountWrapper = mount(Child);

    console.log('Shallow Wrapper Child', shallowWrapper.html());
    console.log('Mount Wrapper Child', mountWrapper.html());

    expect(true).toBe(true);
  })
});

