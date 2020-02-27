import { shallowMount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer";

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true
      }
    });

    expect(wrapper.text()).toBe("2, 4, 6, 8")
  })
});
