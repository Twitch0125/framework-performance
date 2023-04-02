<script setup>
import { listData } from "./vue-array-state.js";
</script>

<template>
  <ul>
    <li v-for="item in listData">
      {{ item.value.name }}
    </li>
  </ul>
</template>
