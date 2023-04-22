import { list, token, go } from "./utils/index.js";
import { render } from "solid-js/web";
import { For, createEffect, on, createSignal } from "solid-js";
import { createStore, produce } from "solid-js/store";

const root = document.getElementById("app");
const [listData, setListData] = createStore(list);
const [updates, setUpdates] = createSignal(0);
createEffect(
  on(listData, (v) => {
    setUpdates(updates() + 1);
  })
);
export function mutate() {
  setListData(
    produce((arr) => {
      setTimeout(() => {
        arr.forEach((item) => (item.name = token()));
      }, 0);
    })
  );
}

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}

function App() {
  return (
    <>
      <ul>
        <For each={listData}>{(item) => <li>{item.name}</li>}</For>
      </ul>
      <div>updates: {updates}</div>
    </>
  );
}
render(() => <App />, root);
