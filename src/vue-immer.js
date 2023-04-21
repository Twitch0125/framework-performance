import { createApp, h, ref } from "vue";
import list from "./utils/list.js";
import token from "./utils/token.js";
import produce from "immer";

const listData = ref(list);

//************************** */
// It looks like this only triggers 100 side effects, where as the other vue implementations trigger 50,000 side effects
//************************** */
function mutate() {
  setTimeout(() => {
    listData.value = produce(listData.value, (arr) => {
      arr.forEach((item) => {
        item.name = token();
      });
    });
  }, 0);
}
function go() {
  return new Promise((resolve) => {
    let iter = 0;
    let interval = setInterval(() => {
      iter++;
      mutate();
      if (iter === 100) {
        clearInterval(interval);
        resolve();
      }
    }, 0);
  });
}

export async function benchmark() {
  console.time("benchmark");
  await go();
  console.timeEnd("benchmark");
}

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
