<template>
  <p>이름 : {{ user.name }}, 나이 : {{ user.age }}세</p>
  <button @click="user.age++">나이 증가</button>
  <button @click="changeName">이름 변경</button>
</template>

<script setup>
// reactive({}) - 반응형 객체
// ref와 달리 객체이기 때문에 key로 불러오면 됨
import { reactive } from "vue";
const user = reactive({
  name: "홍길동",
  age: 20,
});
function changeName() {
  if (user.name === "홍길동") {
    user.name = "최윤지";
  } else {
    user.name = "홍길동";
  }
}
</script>

<style scoped></style>
