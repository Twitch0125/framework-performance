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
      {{ item.value.name }}
    </li>
  </ul>
</template>
