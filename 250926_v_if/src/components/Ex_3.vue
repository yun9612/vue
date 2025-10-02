<template>
  <div>
    <h2>아이디 입력 검사</h2>
    <input type="text" placeholder="아이디를 입력하세요." />
    <!-- 경고 문구 -->
    <p v-if="userId === ''" class="error">❌아이디를 입력하지 않았습니다.</p>
    <p v-else>✅아이디 입력 완료</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 아이디 값
const userId = ref("");
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
