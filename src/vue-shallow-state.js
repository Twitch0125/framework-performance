import { shallowRef } from "vue";
import list from "./utils/list.js";
import token from "./utils/token.js";
export const listData = shallowRef(list);
function mutate() {
  listData.value.forEach((item) => {
    setTimeout(() => {
      item.name = token();
      listData.value = [...listData.value]; //triggers shallowRef
    }, 0);
  });
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
