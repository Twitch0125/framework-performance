<script setup>
const props = defineProps({
  listData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul>
    <li v-for="item in listData">
      {{ item.name }}
    </li>
  </ul>
</template>
