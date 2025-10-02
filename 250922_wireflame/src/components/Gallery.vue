<template>
  <div class="gallery_wrap">
    <h3>GALLERY</h3>
    <ul class="gallery_list">
      <li>
        <img src="/public/broccoli.png" alt="이미지" />
        이미지1
      </li>
      <li>
        <img src="/public/broccoli.png" alt="이미지" />
        이미지2
      </li>
      <li>
        <img src="/public/broccoli.png" alt="이미지" />
        이미지3
      </li>
      <li>
        <img src="/public/broccoli.png" alt="이미지" />
        이미지4
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.gallery_wrap {
  width: 50%;
  background-color: blanchedalmond;
  padding: 20px;
}
.gallery_wrap > h3 {
  margin-bottom: 10px;
}
.gallery_list {
background-color: lightblue;
  display: flex;
  width: 100%;
  gap: 20px;
}
.gallery_list > li {
  width: calc(100% / 4);
}
.gallery_list > li > img {
  width: 100%;
}
</style>
