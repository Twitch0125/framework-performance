import { createApp, h } from "vue";
import { listData } from "./vue-state.js";
export { benchmark } from "./vue-state.js";
const app = createApp({
  setup() {
    return () =>
      h(
        "ul",
        listData.value.map((item) => h("li", item.name))
      );
  },
}).mount("#app");

export default app;
