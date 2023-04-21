import { ref } from "vue";
import { list, token, go } from "./utils/index.js";

export const listData = list.map((item) => ref(item));
function mutate() {
  listData.forEach((item) => {
    setTimeout(() => {
      item.value.name = token();
    }, 0);
  });
}


export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}
