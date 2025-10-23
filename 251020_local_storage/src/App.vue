<template>
  <div>
    <Local_ex01 />
    <hr />
    <hr />
    <hr />
    <div class="container">
      <Review_01 />
      <hr />
      <Login />
    </div>
  </div>
</template>

<script setup>
import Local_ex01 from "./components/Local_ex01.vue";
import Login from "./components/Login.vue";
import Review_01 from "./components/Review_01.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 30px;
}
</style>
