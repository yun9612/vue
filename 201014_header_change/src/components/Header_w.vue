<template>
  <div>
    <header :class="[{ scrolled: isScrolled }, { dark: isDark }]">
      <div class="inner">
        <!-- <img src="/images/link.png" alt="로고" class="logo" @click="goHome" /> -->
        <img :src="currentLogo" alt="로고" class="logo" @click="goHome" />
        <div class="hamburger" @click="toggleSubMenu">
          <div class="line" v-for="n in 3" :key="n"></div>
        </div>
      </div>
      <!-- 서브메뉴 -->
      <Submenu v-if="isSubMenuOpen" @close="isSubMenuOpen = false" />
    </header>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Submenu from "./Submenu.vue";

// 서브메뉴 상태 저장
const isSubMenuOpen = ref(false);
// 햄버거 클릭 시 서브메뉴 나오기
const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};

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
const route = useRoute();
const goHome = () => {
  router.push("/");
};

// 부모(App.vue)에서 받은 값
const props = defineProps({
  isDark: Boolean,
  logoSrc: {
    type: String,
    default: "/images/link.png",
  },
});

// 현재 표시할 로고 이미지 계산
const currentLogo = computed(() => {
  // 스크롤 상태를 우선
  if (isScrolled.value) {
    return "/images/favicon_192.png";
  }
  // 페이지가 변경 될때
  if (["Reser", "Review", "Contact"].includes(route.name)) {
    return "/images/favicon_192.png";
  }
  // 기본 로고
  return props.logoSrc;
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
    // img {
    //   filter: brightness(0) invert(1);
    // }
  }

  // isDark
  &.dark {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    // img {
    //   filter: brightness(0) invert(1);
    // }
  }

  .inner {
    max-width: 1280px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
      width: 50px;
    }
    .hamburger {
      cursor: pointer;
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
