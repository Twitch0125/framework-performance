import { reactive, html } from "@arrow-js/core";
import { list, token, go } from "./utils/index.js";
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

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}
