<template>
  <header>
    <div class="logo">LOGO</div>
    <nav>
      <ul>
        <li>MENU1</li>
        <li>MENU2</li>
        <li>MENU3</li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
}
ul {
  display: flex;
  width: 100%;
  height: 100%;
}
li {
  width: calc(100% / 3);
  background-color: antiquewhite;
  padding: 10px;
}
</style>
