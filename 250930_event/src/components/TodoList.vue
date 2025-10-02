<template>
  <div class="todo_wrap">
    <h2>ToDo List</h2>
    <!-- 할일 입력 -->
    <div class="input_group">
      <input type="text" v-model="newTodo" placeholder="새로운 할일 입력" />
      <button @click="addTodo">추가</button>
    </div>
    <!-- 진행중 할일 목록 -->
    <h3>📌진행중</h3>
    <ul v-for="todo in todos" :key="id">
      <li v-if="!todo.isComplete">
        <input type="checkbox" @change="toggleComplete(todo)" />
        {{ todo.name }}
      </li>
    </ul>
    <!-- 완료된 할일 목록 -->
    <h3>✅완료</h3>
    <ul v-for="todo in todos" :key="id">
      <li v-if="todo.isComplete">
        <input type="checkbox" checked @change="toggleComplete(todo)" />
        <del>
          {{ todo.name }}
        </del>
      </li>
    </ul>
    <!-- 왼료된 목록 삭제 버튼 -->
    <button class="delete_btn" @click="deleteCompleted">완료된 할일 삭제</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 할일 목록 데이터
const todos = ref([
  { id: 1, name: "Vue 공부하기", isComplete: false },
  { id: 2, name: "운동하기", isComplete: true },
  { id: 3, name: "책 읽기", isComplete: false },
]);
// 할일 추가
const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ id: Date.now(), name: newTodo.value, isComplete: false });
    newTodo.value = ""; //입력필드 초기화
  } else {
    return alert("할일을 입력해주세요.");
  }
};
// 할일 완료 / 미완료 토글
const toggleComplete = (todo) => {
  // console.log(todo);
  todo.isComplete = !todo.isComplete;
};
// 완료된 할일 삭제
const deleteCompleted = () => {
  todos.value = todos.value.filter((todo) => !todo.isComplete);
};
</script>

<style scoped>
.todo_wrap {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
}
.input_group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.delete_btn {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
