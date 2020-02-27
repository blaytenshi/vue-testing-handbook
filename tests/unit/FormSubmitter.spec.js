import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter";

describe("FormSubmitter.vue", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find("[data-username]").setValue("alice"); // sets the value of the input field
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice");
  })
});
