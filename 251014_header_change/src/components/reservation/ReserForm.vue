<template>
  <div>
    <div class="card">
      <h2>예약 선택</h2>
      <label>
        이름 :
        <input required v-model="name" type="text" placeholder="이름 입력" />
      </label>
      <br />
      <label>
        날짜 :
        <input required v-model="date" type="date" />
      </label>
      <br />
      <label>
        서비스 :
        <select required v-model="service">
          <option>짐 보관</option>
          <option>제빙기 청소</option>
        </select>
      </label>
      <br />
      <button class="btn btn--primary" @click="reserve">예약하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 상태 저장
const name = ref("");
const date = ref("");
const service = ref("짐 보관");

const emit = defineEmits(["next"]);
// 예약버튼 클릭 시 부모에 신호 보내기
const reserve = () => {
  emit("next", { name: name.value, date: date.value, service: service.value });
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
}
</style>
