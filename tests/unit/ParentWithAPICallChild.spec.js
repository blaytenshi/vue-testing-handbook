import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from "../../src/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "../../src/components/ComponentWithAsyncCall";

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialise API call', () => {
    const wrapper = mount(ParentWithAPICallChild);

    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  })
});
