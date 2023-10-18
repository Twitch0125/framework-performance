import { list, token, go } from "./utils/index.js";
import { render } from "solid-js/web";
import { Index, createRenderEffect, createSignal } from "solid-js";

const root = document.getElementById("app");
const signals = list.map((item) => createSignal(item));
export function mutate() {
  signals.forEach(([getSignal, setSignal]) => {
    setTimeout(() => {
      setSignal({ ...getSignal(), name: token() });
    }, 0);
  });
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
        <Index each={signals}>{(signal) => <li>{signal()[0]().name}</li>}</Index>
      </ul>
    </>
  );
}
render(() => <App />, root);
