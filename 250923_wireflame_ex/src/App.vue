<script setup>
import Footer_wrap from "./components/Footer_wrap.vue";
import Header_wrap from "./components/Header_wrap.vue";
import NoticeGallery from "./components/NoticeGallery.vue";
import Visual from "./components/Visual.vue";
</script>

<template>
  <!-- 전체 -->
  <div class="wrap">
    <!-- 상단 -->
    <Header_wrap />
    <main>
      <div class="inner">
        <!-- 비주얼 -->
        <Visual />
        <!-- 공지사항/갤러리 -->
        <NoticeGallery />
      </div>
    </main>
    <!-- 하단 -->
    <Footer_wrap />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.inner {
  max-width: 1200px;
  margin: auto;
}
</style>
