<template>
  <div>
    <router-link to="/">🏡 홈</router-link>
    <main>
      <router-view></router-view>
    </main>
  </div>
  <div>
    <button>견적 확인하기</button>
    <div class="card">
      <h2>가나다라</h2>
      <p>아라ㅓ러ㅏ아ㅓㅏ</p>
      <img src="./assets/1.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.btn {
  padding: 10px 24px;
  border-radius: 10px;
  border: transparent;
  background-color: #296af1;
  color: #fff;
  font: 25px bold; 
}
img {
  width: 100%;
}
</style>
