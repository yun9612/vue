<template>
  <div>
    <h2>간단한 반복문</h2>
    <ul>
      <!-- v-for ="변수 in 배열" -->
      <li v-for="(item, index) in fruits" :key="index">{{ item }}</li>
    </ul>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">{{ index + 1 }}. {{ item }}</li>
    </ul>
    <h2>글 목록</h2>
    <ul>
      <li v-for="item in posts">{{ item }}</li>
    </ul>
    <h2>메뉴</h2>
    <ul>
      <li v-for="item in menus">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fruits = ref(["사과", "바나나", "포도", "딸기"]);
const products = ref(["피자", "햄버거", "콜라"]);
// 글 배열
const posts = ref(["첫 번째 글", "두 번째 글", "세 번째 글"]);

// 메뉴 배열
const menus = ref(["홈", "상품", "문의", "로그인"]);
</script>

<style scoped></style>
