import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from "../../src/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "../../src/components/ComponentWithAsyncCall";

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialise API call', () => {
    // fully renders the child components executing the API call
    // you'll see a console log of it
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true // replace all instances of ComponentWithAsyncCall with ComponentWithAsyncCall-stub
      }
    });

    // see the component stubbed out
    console.log("ParentWithAPICallChild", wrapper.html());

    // you can use find() with the component name
    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
