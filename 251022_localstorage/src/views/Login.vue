<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="이름을 입력하세요." />
      <input v-model="userpw" type="password" placeholder="비밀번호를 입력하세요." />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref("");
const userpw = ref("");
const login = () => {
  const saved = localStorage.getItem("user");
  if (!saved) {
    alert("가입되지 않은 정보입니다. 회원가입을 해주세요.");
    router.push("/signup");
    return;
  }
  const user = JSON.parse(saved);
  if (username.value === user.username && userpw.value === user.userPW) {
    alert("로그인 성공!");
    // 로그인 성공했을 때 정보 저장(로그인, 로그아웃 제어를 위해)
    localStorage.setItem("loggedInUser", username.value);
    router.push("/");
  } else {
    alert("이름 또는 비밀번호가 틀렸습니다.");
  }
};
</script>

<style scoped lang="scss"></style>
