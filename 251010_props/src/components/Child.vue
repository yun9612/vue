<template>
  <div>
    <h2>안녕하세요, {{ name }}님!</h2>
    <p>나이는 {{ age }}세 입니다.</p>
    <hr />
    <hr />
    <p>{{ shop }} 예약이 진행중입니다.</p>
    <button @click="onClick">눌러보기</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String, //문자열 타입
  age: Number, //숫자 타입
  shop: String,
});

const emit = defineEmits(["clicked"]);
const onClick = () => {
    emit("clicked" , "안녕하세요")
};
</script>

<style scoped lang="scss"></style>
