import { shallowMount } from "@vue/test-utils";
import SubmitButton from "../../src/components/SubmitButton";

describe('SubmitButton.vue', () => {

  const msg = "submit";
  const factory = (propsData) => {
    return shallowMount(SubmitButton, {
      propsData: {
        msg: msg,
        ...propsData
      }
    })
  };

  it("displays a non authorized message", () => {
    const wrapper = factory();

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("displays an admin privileges message", () => {
    const wrapper = factory({ isAdmin: true })

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });

});
