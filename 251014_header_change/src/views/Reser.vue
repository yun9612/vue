<template>
  <div class="home">
    <h1>예약</h1>
    <router-link to="/review" class="btn">리뷰보기</router-link>
    <div class="secton">
      <ReserForm v-if="step === 'form'" @next="goToPayment" />
      <Payment v-if="step === 'payment'" :reservation="reservation" @next="goToComfirm" />
      <ReserComfirm v-if="step === 'comfirm'" :reservation="reservation" @reset="resetReser" />
    </div>
  </div>
</template>

<script setup>
import ReserForm from "@/components/reservation/ReserForm.vue";
import Payment from "@/components/reservation/Payment.vue";
import ReserComfirm from "@/components/reservation/ReserComfirm.vue";
import { ref } from "vue";

const step = ref("form");
const reservation = ref({});
const goToPayment = (data) => {
  // console.log(data);
  reservation.value = data;
  step.value = "payment";
};
const goToComfirm = (data) => {
  reservation.value = data;
  step.value = "comfirm";
};
const resetReser = () => {
  reservation.value = {};
  step.value = "form";
};
</script>

<style scoped lang="scss">
.home {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
