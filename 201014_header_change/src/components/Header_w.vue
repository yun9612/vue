<template>
  <div>
    <header :class="[{ scrolled: isScrolled }, { dark: isDark }]">
      <div class="inner">
        <img src="/images/link.png" alt="로고" class="logo" @click="goHome" />
        <div class="hamburger">
          <div class="line" v-for="n in 3" :key="n"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// 스크롤 상태 저장
const isScrolled = ref(false);
// 스크롤하면 색 변경
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; //50px 이상 스크롤하면 true로 바꿈
};
// 페이지가 켜질 때 감시 시작
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// 로고 클릭 시 홈으로 이동
const router = useRouter();
const goHome = () => {
  router.push("/");
};

// 부모(App.vue)에서 받은 값
const props = defineProps({
  isDark: Boolean,
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 10;

  // scrolled
  &.scrolled {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }

  // isDark
  &.dark {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }

  .inner {
    max-width: 1280px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
    }
    .hamburger {
      .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        border-radius: 2px;
        margin: 4px 0;
        transition: all 0.3s;
      }
    }
  }
}
</style>
