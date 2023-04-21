import { createApp, h } from "vue";
import component from "./vue.vue";
import { listData } from "./vue-state.js";
export { benchmark } from "./vue-state.js";
createApp(() => h(component, { listData: listData.value })).mount("#app");
