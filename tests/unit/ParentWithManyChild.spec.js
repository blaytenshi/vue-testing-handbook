import { shallowMount } from "@vue/test-utils";
import ParentWithManyChild from "../../src/components/ParentWithManyChild";
import Child from "../../src/components/Child";

describe('ParentWithManyChild.vue', () => {

  it('should render 3 Child objects', () => {
    const wrapper = shallowMount(ParentWithManyChild);

    expect(wrapper.findAll(Child).length).toBe(3);
  })

});
