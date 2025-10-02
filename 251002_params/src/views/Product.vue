<template>
  <div class="card">
    <h2>상품 상세 페이지</h2>
    <p>상품 번호 : {{ id }}</p>
    <p>상품명 : {{ productName }}</p>
    <p>상품 가격 : {{ productPrice.toLocaleString() }}원</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); // 현재 페이지의 정보 가져옴
const id = route.params.id;
const products = {
  1: { name: "노트북", price: 1500000 },
  2: { name: "헤드폰", price: 200000 },
};
const productName = products[id].name;
const productPrice = products[id].price;
</script>

<style lang="scss" scoped>
@use "../assets/styles/card" as *;
</style>
