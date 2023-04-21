import { list, token, go } from "./utils/index.js";
const el = document.getElementById("app");
const listItems = list.map((item) => {
  const element = document.createElement("li");
  element.innerText = item.title;
  return element;
});
const listElement = document.createElement("ul");
listElement.append(...listItems);
el.replaceChildren(listElement);

function mutate() {
  listItems.forEach((el) => {
    setTimeout(() => {
      el.childNodes[0].nodeValue = token();
    }, 0);
  });
}

export async function benchmark() {
  console.time("benchmark");
  await go(mutate);
  console.timeEnd("benchmark");
}
