<script setup>
import { reactive } from "vue";
import Button from "./Button.vue";
const state = reactive({ active: null });
const buttons = [
  { title: "Arrow", handler: () => import("/src/arrow.js") },
  { title: "Vue", handler: () => import("/src/vue.js") },
  { title: "Vue render function", handler: () => import("/src/vue-render.js") },
  { title: "Vue array of refs", handler: () => import("/src/vue-array.js") },
  { title: "Vue immer", handler: () => import("/src/vue-immer.js") },
];
function handleClick(button, i) {
  state.active = i;
  button.handler().then(({ benchmark }) => benchmark());
}
</script>

<template>
  <div class="flex gap-2 mb-2">
    <Button
      v-for="(button, i) in buttons"
      @click="handleClick(button, i)"
      :class="state.active === i ? 'btn-primary' : 'btn-neutral'"
    >
      {{ button.title }}
    </Button>
  </div>
</template>
