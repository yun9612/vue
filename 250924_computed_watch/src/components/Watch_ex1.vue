<template>
  <div>
    <button @click="score++">점수 올리기</button>
    <button @click="score--">점수 내리기</button>
    <hr />
    <p>현재 점수 : {{ score }}</p>
    <p>이전 점수 : {{ oldScore }}</p>
    <p>새 점수 : {{ newScore }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// 1. 감시할 값(현재점수)
const score = ref(0);
const newScore = ref("");
const oldScore = ref("");
// 2. watch()로 점수를 감시
watch(score, (newVal, oldVal) => {
  // console.log("점수가 바뀌었습니다.");
  // console.log(`이전 점수 : ${oldVal} > 새 점수 : ${newVal}`);
  oldScore.value = oldVal; // 화면에 보이도록 ref에 저장
  newScore.value = newVal; // 화면에 보이도록 ref에 저장
  if (newVal >= 10) {
    alert("점수가 10점 이상이에요. 목표 달성!");
  }
});
</script>

<style scoped></style>
