<template>
  <h1>v-for</h1>
  <div class="section">
    <!-- 예제 1 -->
    <V_for_ex01 />
    <hr />
    <!-- 예제 2 -->
    <V_for_ex02 />
    <hr />
    <!-- 예제 3 -->
    <V_for_ex03 />
    <hr />
    <!-- 예제 4 -->
    <V_for_ex04 />
  </div>
</template>

<script setup>
import V_for_ex01 from "./V_for_ex01.vue";
import V_for_ex02 from "./V_for_ex02.vue";
import V_for_ex03 from "./V_for_ex03.vue";
import V_for_ex04 from "./V_for_ex04.vue";
</script>

<style scoped>
.section{
    display: flex;
}
.section > div{
    flex: 1;
}
</style>
