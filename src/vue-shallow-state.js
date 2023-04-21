import { shallowRef } from "vue";
import { list, token, go } from "./utils/index.js";

export const listData = shallowRef(list);
function mutate() {
  listData.value.forEach((item) => {
    setTimeout(() => {
      item.name = token();
      listData.value = [...listData.value]; //triggers shallowRef
    }, 0);
  });
}

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}
