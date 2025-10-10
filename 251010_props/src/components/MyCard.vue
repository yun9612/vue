<template>
  <div>
    <p>이름 : {{ props.name }}</p>
    <p>나이 : {{ props.age }}세</p>
    <button @click="emit('clicked', '안녕하세요')">클릭</button>
    <button @click="emit('cancel', '진짜 취소하시겠습니까?')">취소</button>
    <button @click="emit('submit', '내용을 제출하시겠습니까?')">제출</button>
  </div>
</template>

<script setup>
// 부모에게서 정보를 받아옴
const props = defineProps({
  name: String,
  age: Number,
});
// 자식이 부모한테 정보를 보냄
const emit = defineEmits(["clicked", "cancel", "submit"]);
</script>

<style scoped lang="scss"></style>
