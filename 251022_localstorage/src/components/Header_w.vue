<template>
  <div>
    <router-link to="/">LOGO</router-link>
    |
    <router-link to="/reserve">Reservation</router-link>
    |
    <router-link to="/confirm">Confirm</router-link>
    |
    <router-link to="/review">Review</router-link>
    |
    <!-- 로그인 상태에 따라 메뉴 변경 -->
    <span v-if="loggedInUser">
      <strong>{{ loggedInUser }}</strong>
      님
      <button @click="logout">로그아웃</button>
    </span>
    <!-- 기본 메뉴 -->
    <span v-else>
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/signup">Signup</router-link>
    </span>
    <!-- 다크모드 변경 -->
    <button class="theme_btn" @click="toggleTheme">
      {{ isDark ? "🌙 다크모드" : "☀️ 라이트모드" }}
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

// 다크모드 설정
const isDark = ref(false);
const THEME_KEY = "theme";

const loggedInUser = ref(null);
// 로그인 상태 체크
const checkLogin = () => {
  const user = localStorage.getItem("loggedInUser");
  loggedInUser.value = user ? user : null;
};
// 페이지가 열릴때 실행
onMounted(() => {
  checkLogin();
  // 다크모드 설정
  // 로컬에서 테마를 불러옴
  const savedTheme = localStorage.getItem(THEME_KEY);
  isDark.value = savedTheme === "dark";
});
// 다크모드 적용
watch(
  isDark,
  (val) => {
    // console.log(val);
    const el = document.documentElement;
    // console.log(el);
    if (val) {
      el.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  },
  { immediate: true }
);
// 다크모드 버튼 클릭
const toggleTheme = () => {
  isDark.value = !isDark.value;
};

// 로그아웃 클릭
const logout = () => {
  localStorage.removeItem("loggedInUser");
  alert("로그아웃 되었습니다.");
};
</script>

<style scoped lang="scss">
div {
  padding: 20px;
  border-bottom: 1px solid #333;
}
</style>
