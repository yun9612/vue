<template>
  <div>
    <!-- 속성으로 정보를 주고받음 -->
    <Child :name="'Choi'" :age="20" :shop="'제빙기 청소'" @clicked="sayHi" />
    <MyCard
      :name="'Choi'"
      :age="30"
      @clicked="showMessage"
      @cancel="showMessage"
      @submit="showMessage" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import MyCard from "./MyCard.vue";
const sayHi = (message) => {
  alert(message);
};
const showMessage = (message) => {
  alert(message);
};
</script>

<style scoped lang="scss"></style>
