<template>
  <section class="visual">
    <swiper
      class="visualSwiper"
      :modules="[Autoplay, Pagination]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :loop="true">
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <!-- <img src="https://picsum.photos/id/1011/1200/400" alt="이미지1" /> -->
        <img :src="slide.img" :alt="`slide${i + 1}`" />
      </SwiperSlide>
    </swiper>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  { img: "https://picsum.photos/id/1011/1200/400" },
  { img: "https://picsum.photos/id/1012/1200/400" },
  { img: "https://picsum.photos/id/1013/1200/400" },
];
</script>

<style scoped>
.visual img {
  width: 100%;
  display: block;
}
</style>
