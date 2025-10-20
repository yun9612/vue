<template>
  <div class="home">
    <h1>🏠홈</h1>
    <router-link to="/reser" class="btn">예약하기</router-link>
    <router-link to="/review" class="btn">리뷰보기</router-link>
    <router-link to="/faq" class="btn">FAQ</router-link>
    <!-- 상품 목록 -->
    <div class="product_wrap">
      <h2>상품 목록</h2>
      <ul class="product_list">
        <li class="product" v-for="(pro, i) in products" :key="pro.id">
          <!-- :class="{ second: i === 1 }" 두번째 선택 -->
          <!-- :class="{ second: (i + 1) % 2 === 0 }" 짝수의 리스트만 선택 -->
          <!-- :class="{ second: [1, 2].includes(i) }" 특정 여러개 선택 -->
          <img :src="pro.image" :alt="pro.name" @click="goToDetail(pro.id)" />
          <p>상품명 : {{ pro.name }}</p>
          <p>금액 : {{ pro.price.toLocaleString() }}원</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// 상품 배열
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    image: "/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    image: "/images/product4.png",
  },
]);

const goToDetail = (id) => {
  // console.log(id);
  router.push(`/product_detail/${id}`);
};
</script>

<style scoped lang="scss">
.home {
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
  .product_wrap {
    margin-top: 50px;

    .product_list {
      display: flex;
      gap: 10px;
      justify-content: center;
      .product {
        cursor: pointer;
      }
    }
  }
}
</style>
