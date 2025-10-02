<template>
  <div>
    <h2>예약 목록</h2>
    <!-- 총 예약 갯수 -->
    <p>총 예약 : {{ totalReservations }}건</p>
    <!-- 예약 추가 폼 -->
    <form class="form" @submit.prevent="addReservation">
      <input v-model="newName" type="text" placeholder="고객 이름" />
      <select v-model="newService">
        <option value="" disabled>서비스 선택</option>
        <option value="짐 보관">짐 보관</option>
        <option value="제빙기 청소">제빙기 청소</option>
      </select>
      <input v-model="newDate" type="date" />
      <button type="submit">예약 추가</button>
    </form>
    <!-- 예약 리스트 -->
    <div>
      <div v-for="(item, index) in reservations" :key="index" class="card">
        <p>고객명 : {{ item.name }}</p>
        <p>서비스 : {{ item.service }}</p>
        <p>날짜 : {{ item.date }}</p>
        <!-- 예약 상태 -->
        <p v-if="item.done">✅ 완료</p>
        <p v-else>⏳ 대기중</p>
        <!-- 상태 변경 버튼 -->
        <button @click="toggleStaus(index)">상태 변경</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

const reservations = reactive([
  { name: "홍길동", service: "짐 보관", date: "2025-09-20", done: false },
  { name: "김철수", service: "제빙기 청소", date: "2025-10-01", done: false },
]);
// 새 예약 입력값
const newName = ref("");
const newService = ref("");
const newDate = ref("");

// 예약 추가 함수
const addReservation = () => {
  // 입력값이 없을 경우 출력 x (유효성 검사)
  if (!newName.value || !newService.value || !newDate.value) {
    alert("이름, 서비스, 날짜를 모두 입력하세요.");
    return; // 그러면 밑에 내용이 실행 안되게
  }
  //   console.log("click");
  reservations.push({
    name: newName.value,
    service: newService.value,
    date: newDate.value,
    done: false,
  });
  //   입력창 초기화
  newName.value = "";
  newService.value = "";
  newDate.value = "";
};

// 완료 / 대기중 상태 토글
const toggleStaus = (index) => {
  //   console.log(index);
  reservations[index].done = !reservations[index].done;
};

// 오늘 날짜
// toISOString() - 날짜 객체를 국제 표준시간 형식 문자열로 바꿔주는 함수
const today = new Date().toISOString().split("T")[0];
// console.log(today);
// 날짜가 지났으면 자동으로 완료 처리
// watch() 날짜 변경을 감시
watch(
  reservations,
  (newVal) => {
    newVal.forEach((item) => {
      if (item.date < today) {
        item.done = true; // 날짜가 오늘보다 이전이면 완료 처리
      }
    });
    //   console.log(newVal);
  },
  // deep : 깊게 감시(기존 배열에 있는 것까지 감시)
  // immediate : 화면 열리자마자 지난 날짜는 바로 완료 처리
  { deep: true, immediate: true }
);
// 예약 총 갯수
const totalReservations = computed(() => {
  return reservations.length;
});
</script>

<style scoped></style>
