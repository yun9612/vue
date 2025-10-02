<template>
  <div>
    <h2>상품 목록</h2>
    <div v-for="(product, i) in products" :key="i" class="product">
      <p>{{ product.name }} - {{ product.price.toLocaleString() }}원</p>
      <!-- v-if로 조건 -->
      <p v-if="product.soldOut" class="soldout">❌품절</p>
      <p v-else class="instock">✅구매가능</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  { name: "아이스크림", price: 3000, soldOut: false },
  { name: "케이크", price: 15000, soldOut: true },
  { name: "콜라", price: 2000, soldOut: false },
]);
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 8px;
  margin: 6px 0;
  background-color: #fff;
  /* width: 200px; */
}
.soldout {
  color: red;
  font-weight: bold;
}
.instock {
  color: green;
  font-weight: bold;
}
</style>
