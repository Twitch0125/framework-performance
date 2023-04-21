import { shallowRef } from "vue";
import list from "./utils/list";
import token from "./utils/token";
export const listData = list.map((item) => shallowRef(item));
function mutate() {
  listData.forEach((item) => {
    setTimeout(() => {
      item.value = { name: token() };
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
