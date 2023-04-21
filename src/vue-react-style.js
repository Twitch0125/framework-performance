//we're trying to mimic React's way of updating things.
import { createApp, h } from "vue";
import component from "./vue.vue";
import { list, token, go } from "./utils/index.js";
const comp = h(component, { listData: list });
const app = createApp(() => comp);
app.mount("#app");

function mutate() {
  list.forEach((item) => {
    setTimeout(() => {
      item.name = token();
      comp.component.proxy.$forceUpdate()
    }, 0);
  });
}

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}
