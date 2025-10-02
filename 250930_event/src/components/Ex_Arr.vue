<template>
  <div>
    <h1>배열 조작 예제</h1>
    <p>현재 배열 : {{ items }}</p>
    <div class="btn_wrap">
      <button @click="addItem">push() - 추가</button>
      <button @click="removeLastItem">pop() - 마지막 제거</button>
      <button @click="removeFirstItem">shift() - 첫번째 제거</button>
      <button @click="addFirstItem">unshift() - 첫번째로 추가</button>
      <button @click="removeAndAddItem">splice() - 요소 변경</button>
      <button @click="sortItems">sort() - 정렬</button>
      <button @click="reverseItems">reverse() - 역순 정렬</button>
      <button @click="filterItems">filter() - "a" 포함된 요소만 필터링</button>
      <button @click="concatItems">concat() - 새로운 배열과 결합</button>
      <button @click="sliceItems">slice() - index 1~2 요소 추출</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);
// push() - 배열에 추가
const addItem = () => {
  items.value.push("Pineapple");
};
// pop() - 배열의 마지막 제거
const removeLastItem = () => {
  items.value.pop();
};
// shift() - 배열의 첫번째 제거
const removeFirstItem = () => {
  items.value.shift();
};
// unshift() - 배열의 첫번째에 추가
const addFirstItem = () => {
  items.value.unshift("melon");
};
// splice(index번호부터 , 지울 갯수 , 추가할 요소)
const removeAndAddItem = () => {
  items.value.splice(1, 2, "kiwi");
};
// sort() - 원하는 형식으로 배열 정렬
const sortItems = () => {
  items.value.sort();
};
// reverse() - 역순으로 배열 정렬
const reverseItems = () => {
  items.value.reverse();
};
// filter() - "a" 포함된 배열만
const filterItems = () => {
  items.value = items.value.filter((item) => {
    // console.log(item);
    return item.includes("a");
  });
};
// concat() - 배열을 추가
const concatItems = () => {
  items.value = items.value.concat(["Peach", "Blueberry", "Strawberry"]);
};
// slice() - start부터 end 전까지 자르기
const sliceItems = () => {
  items.value = items.value.slice(1, 3); // 1부터 3전까지(1, 2)
};
</script>

<style scoped></style>
