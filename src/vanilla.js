import list from "./utils/list.js";
import token from "./utils/token.js";
const el = document.getElementById("app");
const listItems = list.map((item) => {
  const element = document.createElement("li");
  element.innerText = item.title;
  return element;
});
const listElement = document.createElement("ul")
listElement.append(...listItems) 
el.replaceChildren(listElement);

function mutate() {
  listItems.forEach((el) => {
    setTimeout(() => {
      el.innerText = token();
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
