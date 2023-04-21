import {ref} from 'vue'
import { list, token, go } from "./utils/index.js";

export const listData = ref(list);
function mutate() {
  listData.value.forEach((item) => {
    setTimeout(() => {
      item.name = token();
    }, 0);
  });
}

export async function benchmark() {
  console.time("benchmark");
  await go(mutate)
  console.timeEnd("benchmark");
}
