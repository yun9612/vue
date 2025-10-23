<template>
  <div>
    <!-- localstorage -->
    <div class="box">
      <h2>짐 보관 예약</h2>
      <input v-model="name" type="text" placeholder="이름을 입력하세요." />
      <br />
      <button @click="saveName">💾 저장하기</button>
      <button @click="loadName">📂 불러오기</button>
      <button @click="clearName">🗑 삭제하기</button>
      <p>저장된 이름 : {{ savedName }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
// 저장된 이름
const savedName = ref("");
// 저장하기
const saveName = () => {
  localStorage.setItem("customerName", name.value);
  alert("이름이 저장되었습니다.");
  savedName.value = name.value; // 저장 후 화면 출력
};
// 불러오기
const loadName = () => {
  const getName = localStorage.getItem("customerName");
  //   console.log(getName);
  savedName.value = getName ? getName : "저장된 이름이 없습니다.";
};
// 삭제하기
const clearName = () => {
  localStorage.removeItem("customerName");
  alert("저장된 이름이 삭제되었습니다.");
  savedName.value = "";
};

// 페이지 열릴 때 자동으로 불러오기
onMounted(() => {
  //   const getName = localStorage.getItem("customerName");
  //   if (getName) {
  //     savedName.value = getName;
  //   } else {
  //     savedName.value = "저장된 이름이 없습니다.";
  //   }
  loadName();
});
</script>

<style scoped lang="scss"></style>
