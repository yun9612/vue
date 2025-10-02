<template>
  <div>
    <div class="container">
      <div class="section">
        <h3>상품 페이지</h3>
        <router-link to="/product/1" class="btn">상품 1 보기</router-link>
        <br />
        <router-link to="/product/2" class="btn">상품 2 보기</router-link>
      </div>
      <div class="section">
        <h3>유저 페이지</h3>
        <router-link to="/user/kim" class="btn">Kim 프로필</router-link>
        <br />
        <router-link to="/user/sara" class="btn">Sara 프로필</router-link>
      </div>
      <div class="section">
        <h3>게시글 페이지</h3>
        <router-link to="/post/101" class="btn">게시글 101 보기</router-link>
        <br />
        <router-link to="/post/202" class="btn del">게시글 202 보기</router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/btn" as *;
@use "../assets/styles/variables" as *;
.container {
  display: flex;
  padding: 20px;
  gap: 20px;
  h3 {
    color: $main-color;
    margin-bottom: 30px;
  }
  .section {
    padding: 20px;
    background-color: azure;
  }
}
</style>
