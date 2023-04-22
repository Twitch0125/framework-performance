import { createRoot } from "react-dom/client";
import { list, go, token } from "./utils/index.js";
const root = createRoot(document.getElementById("app"));

const renderApp = () => root.render(<App listData={list} />);

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}

function mutate() {
  list.forEach((item) => {
    setTimeout(() => {
      item.name = token();
      renderApp();
    }, 0);
  });
}

function App(props) {
  return (
    <ul>
      {props.listData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
