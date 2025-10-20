<template>
  <div class="notfound">
    <h1>😢 404</h1>
    <p>이 페이지는 없는 페이지입니다.</p>
    <router-link to="/">홈으로 돌아가기</router-link>
    <!-- 404페이지는 useRouter안해도 적용 가능 -->
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.notfound {
  text-align: center;
  margin-top: 100px;
  font-family: "Pretendard", sans-serif;
  h1 {
    font-size: 80px;
    color: #ff6b6b;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    color: #555;
    margin-bottom: 30px;
  }
  a {
    display: inline-block;
    background-color: #092857;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
  }
}
</style>
