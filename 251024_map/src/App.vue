<template>
  <div>
    <router-link to="/">기본 맵</router-link>
    |
    <router-link to="/mapmarker">마커 여러개</router-link>
    |
    <router-link to="/maplocation">주소/위치 검색하기</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
