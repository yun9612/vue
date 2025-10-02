<template>
  <div>
    <h2>버튼 색상 바꾸기</h2>
    <!-- v-bind = style -->
    <button
      :style="{ backgroundColor: btnColor, color: btnColorW, padding: '10px' }"
      @click="changeColor">
      {{ btnTxt }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 버튼 변수
const btnColor = ref("blue");
const btnColorW = ref("white");
const btnTxt = ref("click");
// 클릭시 색 변경 함수
const changeColor = () => {
  // console.log("click");
  const colors = ["red", "green", "orange", "purple", "pink"];
  // btnColor.value = colors[2];
  // console.log(colors[Math.floor(Math.random() * colors.length)]);
  // console.log(colors.length);
  btnColor.value = colors[Math.floor(Math.random() * colors.length)];
};
</script>

<style scoped></style>
