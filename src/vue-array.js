import { createApp, h } from "vue";
import component from "./vue-array.vue";
export { benchmark  } from "./vue-array-state.js";

createApp(() => h(component)).mount("#app");
