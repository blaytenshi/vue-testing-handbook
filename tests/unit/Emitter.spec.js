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

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  });

  it("emits an event without mounting the component", () => {
    const events = {};

    // this is essentially a mocked $emit property on the vue instance
    // where it simply takes a function that returns the event object in the
    // wrapper.emitted()'s form of { eventName: [ [...arg], [...arg] ] }
    const $emit = (event, ...args) => { events[event] = [...args]};

    Emitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).toEqual(["name", "password"]);
  });
});
