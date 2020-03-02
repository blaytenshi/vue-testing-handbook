import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from "../../src/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "../../src/components/ComponentWithAsyncCall";

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialise API call', () => {
    // fully renders the child components executing the API call
    // you'll see a console log of it
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: "<div class='stub'></div>" // replace all instances of ComponentWithAsyncCall with your own custom element or component
      }
    });

    // see the component stubbed out
    console.log("mount ParentWithAPICallChild", wrapper.html());

    // you can use find() with the component name
    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });

  it('renders with shallowMount and does not initialise API Call', () => {

    // shallow mount automatically stubs child components
    const wrapper = shallowMount(ParentWithAPICallChild);

    // should print out <componentwithasynccall-stub></componentwithasynccall-stub>
    console.log("Shallow Mount ParentWithAPICallChild", wrapper.html());

    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  })
});
