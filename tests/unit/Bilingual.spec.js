import { shallowMount, config } from "@vue/test-utils"
import Bilingual from "@/components/Bilingual.vue"
import translations from "../../src/components/translation"

const locale = "ja";
// const localse = "en";

// here we're using the test utils config object to set a default mock instead of
// using the mock option in the shallowMount
config.mocks["$t"] = msg => translations[locale][msg];

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(Bilingual);

    console.log(wrapper.html());
  })
});
