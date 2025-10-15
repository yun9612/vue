<template>
  <div class="card">
    <h2>예약 확인</h2>
    <p>✅{{ reservation.name }}님, 예약이 완료 되었습니다.</p>
    <p>날짜 : {{ reservation.date }}</p>
    <p>서비스 : {{ reservation.service }}</p>
    <p>결제 금액 : {{ reservation.price.toLocaleString() }}원</p>
    <p>상태 : {{ reservation.status }}</p>
    <button class="btn btn--danger" @click="cancelReser">취소하기</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  reservation: { type: Object, required: true },
});
const emit = defineEmits(["reset"]);
const cancelReser = () => {
  const confirmCancel = confirm("정말 예약을 취소하시겠습니까?");
  if (confirmCancel) {
    alert("예약이 취소되었습니다.");
    emit("reset");
    router.push("/reser");
  } else {
    router.push("/");
  }
};
</script>

<style scoped lang="scss"></style>
