<template>
  <div class="home">
    <div class="container">
      <!-- 탭 메뉴 -->
      <div class="tabs">
        <button @click="activeTab = 'detail'" :class="{ active: activeTab === 'detail' }">
          상세 정보
        </button>
        <button @click="activeTab = 'review'" :class="{ active: activeTab === 'review' }">
          리뷰
        </button>
      </div>
      <!-- 상세 정보 -->
      <div class="content" v-if="activeTab === 'detail'">
        <h2>제품 상세 설명</h2>
        <p>이 이어폰은 최상의 음질을 제공하며, 무선으로 편리하게 사용할 수 있습니다.</p>
        <ul>
          <li>✔ 블루투스 5.0 지원</li>
          <li>✔ 최대 24시간 사용 가능</li>
          <li>✔ 노이즈 캔슬링 기능 포함</li>
        </ul>
        <div class="img_container" :class="{ expended: isExpended }">
          <img src="/public/images/datail_page.jpg" alt="상세이미지" />
          <div class="gradient_overlay">
            <!-- 그라디언트 -->
          </div>
        </div>
        <!-- 더보기 버튼 -->
        <button class="moreBtn" @click="toggleReadMore">
          {{ isExpended ? "닫기" : "더보기" }}
        </button>
      </div>
      <!-- 리뷰 -->
      <!-- <div class="content" v-if="activeTab === 'review'"></div> -->
      <!-- 컴포넌트로 쓰기 -->
      <Review_c class="content" v-if="activeTab === 'review'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Review_c from "./Review_c.vue";

const activeTab = ref("detail");

// 상세 이미지
const isExpended = ref(false);
const toggleReadMore = () => {
  isExpended.value = !isExpended.value;
};
</script>

<style scoped lang="scss">
.container {
  max-width: 800px;
  margin: auto;
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
      &.active {
        background-color: #42b983;
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .img_container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    transition: all 0.3s;
    &.expended {
      height: auto;
    }
    img {
      width: 100%;
    }
    .gradient_overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 100%);
    }
  }
  .moreBtn {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    background-color: #42b983;
    color: #fff;
    &:hover {
      background-color: #3aa776;
    }
  }
}
</style>
