import { createApp, h } from "vue";
import component from "./vue.vue";
export { benchmark } from "./vue-state.js";
createApp(() => h(component)).mount("#app");
