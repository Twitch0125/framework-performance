import { createApp, h } from "vue";
import component from "./vue.vue";
import { listData } from "./vue-shallow-state.js";
export { benchmark } from "./vue-shallow-state.js";
createApp(() => h(component, { listData: listData.value })).mount("#app");
