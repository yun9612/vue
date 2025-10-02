<template>
  <div>
    <!-- watch() - 데이터 감시 -->
    <input @input="updateName" type="text" v-model="name" placeholder="이름을 입력해주세요" />
    <p>안녕하세요, {{ name }}님! 반갑습니다.</p>
    <hr />
    <h3>이름 감시</h3>
    <p>이전 이름 : {{ oldName }}</p>
    <p>새 이름 : {{ newName }}</p>
    <p>현재 이름 : {{ name }}</p>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from "vue";

// 특정 데이터가 바뀔 때마다 실행되는 함수
const name = ref("");
const oldName = ref(""); //변경 전 값을 저장
const newName = ref(""); // 변경 후 값을 저장

// watch() - 데이터 감시
// watch(name, (newName, oldName) => {});
watch(name, (newVal, oldVal) => {
  //   console.log(newVal);
  //   console.log(oldVal);
  oldName.value = oldVal; // 화면에 보이도록 ref에 저장
  newName.value = newVal; // 화면에 보이도록 ref에 저장
});

// 한글 이슈
const updateName = (event) => {
  nextTick(() => {
    name.value = event.target.value;
  });
};
</script>

<style scoped></style>
