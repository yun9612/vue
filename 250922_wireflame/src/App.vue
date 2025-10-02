<script setup>
import Banner from "./components/Banner.vue";
import FooterMenu from "./components/FooterMenu.vue";
import Gallery from "./components/Gallery.vue";
import Logo from "./components/Logo.vue";
import Menu from "./components/Menu.vue";
import Notice from "./components/Notice.vue";
</script>

<template>
  <header>
    <Logo />
    <Menu />
  </header>
  <Banner />
  <div class="middle_section">
    <Notice />
    <Gallery />
  </div>
  <footer>
    <Logo />
    <FooterMenu />
  </footer>
</template>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
.middle_section {
  display: flex;
}
footer {
  display: flex;
  gap: 20px;
}
</style>
