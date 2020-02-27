import { shallowMount } from "@vue/test-utils";
import SubmitButton from "../../src/components/SubmitButton";

describe('SubmitButton.vue', () => {
  it("displays a non authorized message", () => {
    const msg = "submit";
    const wrapper = shallowMount(SubmitButton, {
      propsData: { msg: msg }
    });

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("displays an admin privileges message", () => {
    const msg = "submit";
    const isAdmin = true;
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg,
        isAdmin
      }
    });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  })
});
