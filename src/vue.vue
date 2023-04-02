<script setup>
import {listData} from './vue-state.js'
</script>

<template>
  <ul>
    <li v-for="item in listData">
      {{ item.name }}
    </li>
  </ul>
</template>
