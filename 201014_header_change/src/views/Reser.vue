<template>
  <div class="home">
    <h1>예약</h1>
    <router-link to="/review" class="btn">리뷰보기</router-link>
  </div>
</template>

<script setup></script>

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
