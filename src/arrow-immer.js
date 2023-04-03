import { reactive, html } from "@arrow-js/core";
import list from "./utils/list.js";
import token from "./utils/token.js";
import produce from "immer";
const el = document.getElementById("app");
const data = reactive({
  list,
});
html`<ul>
  ${data.list.map((item) => html`<li>${() => item.name}</li>`)}
</ul>`(el);

function mutate() {
  setTimeout(() => {
    data.list = produce(data.list, (l) =>
      l.forEach((item) => {
        item.name = token();
      })
    );
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
