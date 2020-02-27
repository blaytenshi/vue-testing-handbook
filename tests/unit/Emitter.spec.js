import { shallowMount } from "@vue/test-utils"
import Emitter from "@/components/Emitter"

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = shallowMount(Emitter);

    // in vue, methods are attached to the Vue instance
    // this means in the methods the value of 'this' is actually references the vue instance
    // also this is why you shouldn't use arrow functions to declare methods in the
    // script because you'll lose the reference to the vue instance
    wrapper.vm.emitEvent();

    // logging out the content of the wrapper's emitted helper function
    console.log(wrapper.emitted());
  })
});
