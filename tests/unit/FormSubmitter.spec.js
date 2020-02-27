import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter";
import flushPromises from "flush-promises";

let url = '';
let data = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve()
    })
  }
};

describe("FormSubmitter.vue", () => {

  // the async here is not only for the trigger but also for the mockHttp!
  // it can be tricky to know to add this here if you don't know the mocked $http
  // uses a promise!
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    });

    wrapper.find("[data-username]").setValue("alice"); // sets the value of the input field
    wrapper.find("form").trigger("submit.prevent");

    await flushPromises(); // need to read up on flushPromises... still not sure how it actually works
    // more reading here in this github post: https://github.com/testing-library/react-testing-library/issues/11

    expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice");
    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice"  });
  })
});
