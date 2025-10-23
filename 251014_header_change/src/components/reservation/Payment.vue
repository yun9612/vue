<template>
  <div class="card">
    <h2>예약 결제</h2>
    <p>이름 : {{ reservation.name }}</p>
    <p>날짜 : {{ reservation.date }}</p>
    <p>서비스 : {{ reservation.service }}</p>
    <p>결제 금액 : {{ price.toLocaleString() }}원</p>
    <!-- 결제 버튼 : 클릭 시 pay함수 실행 -->
    <button class="btn btn--secondary" @click="pay">결제하기</button>
  </div>
</template>

<script setup>
const props = defineProps({
  reservation: { type: Object, required: true },
});
const emit = defineEmits(["next"]);
const price = props.reservation.service === "짐 보관" ? 10000 : 20000;
const pay = () => {
  emit("next", {...props.reservation , price, status : "결제 완료"});
};
</script>

<style scoped lang="scss"></style>
