<template>
  <div>
    <input v-model="message" @input="updateMessage" type="text" placeholder="메세지 입력" />
    <p>입력한 내용 : {{ message }}</p>
    <input v-model="username" @input="updateName" type="text" placeholder="Your Name" />
    <p>Name : {{ username }}</p>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
const message = ref("");
const username = ref("");
// 한글 이슈
const updateMessage = (event) => {
  nextTick(() => {
    message.value = event.target.value;
  });
};
const updateName = (e) => {
  nextTick(() => {
    username.value = e.target.value;
  });
};
</script>

<style scoped></style>
