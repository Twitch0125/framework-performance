<script setup>
import { ref } from "vue";
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
  { title: "React", handler: () => import("/src/react.jsx") },
  { title: "Svelte", handler: () => import("/src/svelte.js") },
];
const active = ref();
function handleClick(button, i) {
  active.value = i;
  button.handler().then(({ benchmark }) => benchmark?.());
}
</script>

<template>
  <div class="flex gap-2 mb-2 overflow-x-auto">
    <button
      v-for="(button, i) in buttons"
      @click="handleClick(button, i)"
      class="btn"
      :class="active === i ? 'btn-primary' : 'btn-neutral'"
    >
      {{ button.title }}
    </button>
  </div>
</template>
