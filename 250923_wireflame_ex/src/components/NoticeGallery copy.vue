<script setup></script>

<template>
  <section class="notice_gallery">
    <div class="notice">
      <h2>공지사항</h2>
      <ul>
        <li>9월 휴뮤 안내</li>
        <li>새로운 서비스 출시</li>
        <li>이벤트 참여 방법 안내</li>
      </ul>
    </div>
    <div class="gallery">
      <h2>갤러리</h2>
      <div class="grid">
        <img src="https://picsum.photos/id/1020/200/150" alt="이미지" />
        <img src="https://picsum.photos/id/1021/200/150" alt="이미지" />
        <img src="https://picsum.photos/id/1022/200/150" alt="이미지" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.notice_gallery {
  display: flex;
  gap: 20px;
  margin: 40px 0;
}
.notice,
.gallery {
  flex: 1;
}
.notice h2,
.gallery h2 {
  margin-bottom: 10px;
}
.gallery .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
.gallery img {
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .notice_gallery {
    flex-direction: column;
  }
}
</style>
