<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="username" type="text" placeholder="이름을 입력하세요." />
      <input v-model="userpw" type="password" placeholder="비밀번호를 입력하세요." />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const userpw = ref("");
const signup = () => {
  const user = {
    username: username.value,
    userPW: userpw.value,
  };
  localStorage.setItem("user", JSON.stringify(user)); // 회원정보 저장
  alert("회원가입이 완료되었습니다.");
  router.push("/login");
};
</script>

<style scoped lang="scss"></style>
