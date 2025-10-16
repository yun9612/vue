<template>
  <div class="home">
    <div class="container">
      <!-- 탭 메뉴 -->
      <div class="tabs">
        <button @click="activeTab = 'detail'">상세 정보</button>
        <button @click="activeTab = 'review'">리뷰</button>
      </div>
      <!-- 상세 정보 -->
      <div class="content" v-if="activeTab === 'detail'">상세정보 영역</div>
      <!-- 리뷰 -->
      <div class="content" v-if="activeTab === 'review'">리뷰 영역</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("detail");
</script>

<style scoped lang="scss">
.container {
  max-width: 600px;
  margin: 50px auto;
  .tabs {
    display: flex;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    button {
      flex: 1;
      padding: 10px;
      border: none;
      background: #d3d3d3;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;
    }
  }
}
</style>
