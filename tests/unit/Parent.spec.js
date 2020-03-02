import { shallowMount, mount } from "@vue/test-utils";
import Parent from '@/components/Parent'

describe('Parent.vue', () => {
  it('should render parent compnent', () => {
    const shallowWrapper = shallowMount(Parent);
    const mountWrapper = mount(Parent);

    console.log('Shallow Wrapper Parent', shallowWrapper.html());
    console.log('Mount Wrapper Parent', mountWrapper.html());
  });

  it('does not render a span', () => {
    const wrapper = shallowMount(Parent);

    // the isVisible() syntax is for checking if v-show is true or false
    // if v-show on the component is false, then it will be false (duh!)
    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it('does render a span', () => {
    const wrapper = shallowMount(Parent, {
      // change the showSpan property to true and then check the v-show again
      data() {
        return {
          showSpan: true
        }
      }
    });

    expect(wrapper.find("span").isVisible()).toBe(true);
  })
});
