import { createApp, h } from "vue";
import component from "./vue-array.vue";
import { listData } from "./vue-array-shallow-state.js";
export { benchmark } from "./vue-array-shallow-state.js";

createApp(() => h(component, { listData })).mount("#app");
