<script setup>
import { reactive } from "vue";
import Button from "./Button.vue";
const state = reactive({ active: null });
const buttons = [
  { title: "Vanilla", handler: () => import("/src/vanilla.js") },
  { title: "Arrow", handler: () => import("/src/arrow.js") },
  { title: "Arrow immer", handler: () => import("/src/arrow-immer.js") },
  { title: "Vue ref", handler: () => import("/src/vue.js") },
  { title: "Vue shallowRef", handler: () => import("/src/vue-shallow.js") },
  { title: "Vue ref render function", handler: () => import("/src/vue-render.js") },
  { title: "Vue array of refs", handler: () => import("/src/vue-array.js") },
  { title: "Vue array of shallowRefs", handler: () => import("/src/vue-array-shallow.js") },
  { title: "Vue immer", handler: () => import("/src/vue-immer.js") },
  { title: "Vue react style", handler: () => import("/src/vue-react-style.js") },
  { title: "React", handler: () => import("/src/react.jsx") },
  { title: "Svelte", handler: () => import("/src/svelte.js") },
];
function handleClick(button, i) {
  state.active = i;
  button.handler().then(({ benchmark }) => benchmark?.());
}
</script>

<template>
  <div class="flex gap-2 mb-2 overflow-x-auto">
    <Button
      v-for="(button, i) in buttons"
      @click="handleClick(button, i)"
      :class="state.active === i ? 'btn-primary' : 'btn-neutral'"
    >
      {{ button.title }}
    </Button>
  </div>
</template>
