import { shallowMount } from "@vue/test-utils"
import Emitter from "@/components/Emitter"

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = shallowMount(Emitter);

    wrapper.vm.emitEvent();
    wrapper.vm.emitEvent();

    // we can see that emitted() returns an object with property keys of
    // the event that was emitted with the values as an array of arrays such that
    // each time the event is emitted, the next array is the arguments that was
    // emitted alongside the event in emit order

    console.log(wrapper.emitted()); // will show:
    // { myEvent: [ [ 'name', 'password' ], [ 'name', 'password' ] ] }
    // because it was called twice

    console.log(wrapper.emitted().myEvent); // will show:
    // [ [ 'name', 'password' ], [ 'name', 'password' ] ]
  })
});
