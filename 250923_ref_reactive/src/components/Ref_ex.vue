<template>
  <p>{{ message }}</p>
  <button @click="changeMessage">글자 바꾸기</button>
  <!-- <button @click="count++">눌러봐+ {{ count }}</button> -->
  <button @click="increase">눌러봐+ {{ count }}</button>
  <button @click="increase1">눌러바- {{ count1 }}</button>
  <hr />
  <p>{{ nameChange }}</p>
  <button @click="changeName">이름 바꾸기</button>
</template>

<script setup>
import { ref } from "vue";
// ref() - 반응형 변수
// vue가 값을 기억하고, 바뀌면 화면도 자동으로 바뀜
const count = ref(0);
const count1 = ref(0);
const message = ref("안녕 반가워");
const nameChange = ref("최윤지");
// console.log(count.value);
// 더하기 기능
function increase() {
  count.value++;
}
// 빼기 기능
function increase1() {
  count1.value--;
}

// 글자 바꾸기 함수
function changeMessage() {
  // message.value = "만나서 반가워 😄";
  if (message.value === "안녕 반가워") {
    message.value = "만나서 반가워 😄";
  } else {
    message.value = "안녕 반가워";
  }
}
// 이름 바꾸기 함수
function changeName() {
  if (nameChange.value === "최윤지") {
    nameChange.value = "Choi Yunji";
  } else {
    nameChange.value = "최윤지";
  }
}
</script>

<style scoped></style>
