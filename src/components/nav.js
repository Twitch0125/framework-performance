import { createApp } from "vue";
import Nav from "./Nav.vue";
const el = document.getElementById("nav");
createApp(Nav).mount(el);

//********************************* */
//  for some reason this broke with arrow-js. Keeping for future bug report. It was only registering listeners on every other element
//********************************* */
// import {html, reactive} from '@arrow-js/core'
// const buttons = [
//   { title: "Arrow", handler: () => import("/src/arrow.js") },
//   { title: "Vue", handler: () => import("/src/vue.js") },
//   { title: "Vue render function", handler: () => import("/src/vue-render.js") },
//   { title: "Vue array of refs", handler: () => import("/src/vue-array.js") },
//   { title: "Vue immer", handler: () => import("/src/vue-immer.js") },
// ];
// const el = document.getElementById("nav");
// const state = reactive({ active: null });
// function handleClick(button, i) {
//   state.active = i;
//   console.log("click");
//   button.handler().then(({ benchmark }) => benchmark());
// }
// html`${() =>
//   buttons.map(
//     (button, index) =>
//       html`<button
//         @click="${() => handleClick(button, index)}"
//         type="button"
//         class="bg-white border border-gray-700 rounded px-3 py-2 ${() =>
//           state.active === index && "bg-yellow-200 border-yellow-400"}"
//       >
//         ${button.title}
//       </button>`
//   )}`(el);
