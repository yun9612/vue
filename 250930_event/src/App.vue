<template>
  <div class="container">
    <Event />
    <Form_ex />
  </div>
  <div class="container">
    <div class="contents">
      <h2>Array</h2>
      <button @click="showArr = !showArr">{{ showArr ? "닫기" : "배열 예제보기" }}</button>
      <Ex_Arr v-if="showArr" />
    </div>
    <div class="contents">
      <button @click="showTodoList = !showTodoList">
        {{ showTodoList ? "닫기" : "ToDoList 보기" }}
      </button>
      <!-- <TodoList v-if="showTodoList" /> -->
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import Form_ex from "./components/Form_ex.vue";
import Event from "./components/Event.vue";
import { ref } from "vue";
import Ex_Arr from "./components/Ex_Arr.vue";
import TodoList from "./components/TodoList.vue";

const showArr = ref(false);
const showTodoList = ref(false);
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.container > div {
  flex: 1;
  background-color: aliceblue;
}
</style>
