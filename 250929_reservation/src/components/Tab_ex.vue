<template>
  <div class="tab_box">
    <h2>탭 메뉴 예제 1</h2>
    <!-- 탭 버튼 -->
    <button @click="activeTab = 'home'">🏠홈</button>
    <button @click="activeTab = 'about'">ℹ️소개</button>
    <button @click="activeTab = 'contact'">📞연락</button>
    <!-- 탭 내용 -->
    <div v-if="activeTab === 'home'">
      <h3>🏠홈 화면</h3>
      <p>여기는 메인 페이지입니다.</p>
    </div>
    <div v-if="activeTab === 'about'">
      <h3>ℹ️소개 화면</h3>
      <p>여기는 탭 기능 연습 페이지입니다.</p>
    </div>
    <div v-if="activeTab === 'contact'">
      <h3>📞연락 화면</h3>
      <p>문의 : abc@gmail.com</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 현재 어떤 챕을 눌렀는지 저장 (처음에는 "home")
const activeTab = ref("home");
</script>

<style scoped>
.tab_box {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
button {
  margin: 5px;
  padding: 8px 12px;
  border: 1px solid #333;
  background: #eee;
  cursor: pointer;
}
button:hover {
  background: #ddd;
}
</style>
