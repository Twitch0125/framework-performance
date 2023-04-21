import { token } from "./token.js";
export const list = [];
for (let i = 0; i < 500; i++) {
  list.push({ name: token(), id: crypto.randomUUID() });
}
