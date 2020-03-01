import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from "../../src/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "../../src/components/ComponentWithAsyncCall";

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialise API call', () => {
    // fully renders the child components executing the API call
    // you'll see a console log of it
    const wrapper = mount(ParentWithAPICallChild);

    // you can use find() with the component name
    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
