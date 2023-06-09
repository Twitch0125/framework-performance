import { createApp, h } from "vue";
import component from "./vue-array.vue";
import { listData } from "./vue-array-state.js";
export { benchmark } from "./vue-array-state.js";

createApp(() => h(component, { listData })).mount("#app");
