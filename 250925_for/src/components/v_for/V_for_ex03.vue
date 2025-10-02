<template>
  <div>
    <h2>수량 선택</h2>
    <select v-model="selectedQty">
      <option v-for="n in 10" :key="n" :value="n">{{ n }}개</option>
    </select>
    <p>선택한 수량 : {{ selectedQty }}개</p>
    <h2>과일 선택</h2>
    <select v-model="selectedFruit">
      <option v-for="(fruit, index) in fruits" :key="index" :value="fruit">{{ fruit }}</option>
    </select>
    <p>선택한 과일 : {{ selectedFruit }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedQty = ref(1);
// 과일 목록 배열
const fruits = ["🍎 사과", "🍌 바나나", "🍇 포도", "🍊 오렌지"];
const selectedFruit = ref(fruits[0]);
</script>

<style scoped></style>
