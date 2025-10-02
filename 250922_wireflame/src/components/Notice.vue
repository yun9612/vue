<template>
  <div class="notice_wrap">
    <h3>NOTICE</h3>
    <ul class="notice_list">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.notice_wrap {
  width: 50%;
  background-color: azure;
  padding: 20px;
}
.notice_wrap > h3 {
  margin-bottom: 10px;
}
.notice_list {
  background-color: beige;
}
.notice_list > li {
  padding: 5px 0;
  border-bottom: 1px solid #333;
}
</style>
