<template>
  <div class="about">
    <h1>👋 About 페이지</h1>
    <p class="intro">여기는 소개 페이지에요!</p>
    <button class="btn">눌러보기</button>
    <button class="btn-s">보내기</button>
    <button class="btn-d">삭제하기</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// 변수 사용
$main-color: #4caf50;
$hover-color: #388e3c;
$font-color: #333;

// mixin
@mixin btn-style($bg, $color) {
  background-color: $bg;
  color: $color;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    background-color: darken($bg, 10%);
  }
}

// 중첩 사용
.about {
  padding: 20px;
  background-color: #f0f0f0;
  h1 {
    color: $main-color;
    margin-bottom: 15px;
  }
  .intro {
    color: $font-color;
    margin-bottom: 15px;
  }
  .btn {
    @include btn-style($main-color, white);
  }
  .btn-s {
    @include btn-style(blue, white);
  }
  .btn-d {
    @include btn-style(red, white);
  }
}
</style>
