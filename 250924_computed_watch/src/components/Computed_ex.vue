<template>
  <div>
    <p>가격 : {{ formatNumber(price) }}원</p>
    <p>세금 : {{ tax }}원</p>
    <p>총 합계 : {{ formatNumber(total) }}원</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
// computed() -  계산된 값을 담아 두는 함수
// 다른 데이터에 따라 자동으로 값이 바뀌는 계산 전용 변수
const price = ref(2500);
const tax = computed(() => {
  return price.value * 0.1;
  
});
// console.log(tax.value);
const total = computed(() => {
  return price.value + tax.value;
});
// 천 단위 , 함수
const formatNumber = (num) => {
  return num.toLocaleString();
};
</script>

<style scoped></style>
