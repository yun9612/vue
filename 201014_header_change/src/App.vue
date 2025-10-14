<template>
  <div>
    <!-- 헤더 -->
    <Header_w :isDark="isDarkHeader" />
    <!-- 페이지 보이기 -->
    <router-view></router-view>
    <!-- 고탑버튼 -->
    <QuickTop />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header_w from "./components/Header_w.vue";
import QuickTop from "./components/QuickTop.vue";

const isDarkHeader = computed(() => ["Reser", "Review"].includes(route.name));
const route = useRoute();
</script>

<style scoped lang="scss"></style>
