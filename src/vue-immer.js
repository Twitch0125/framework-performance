import { createApp, h, ref } from "vue";
import { list, token, go } from "./utils/index.js";
import produce from "immer";

const listData = ref(list);

//************************** */
// It looks like this only triggers 100 updates, where as the other vue implementations trigger 50,000 updates
// I guess only use Immer if you're okay with that.
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
export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
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
