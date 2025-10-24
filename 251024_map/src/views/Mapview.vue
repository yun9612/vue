<template>
  <div>
    <!-- 지도를 표시할 div 입니다 -->
    <div id="map" style="width: 100%; height: 350px"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  //   챗gpt가 준 코드
  // 카카오맵 스크립트가 로드되어 있어야 합니다
  //   const mapContainer = document.getElementById("map");
  //   const mapOption = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };

  //   const map = new kakao.maps.Map(mapContainer, mapOption);
  // 선생님이랑 작성한 코드
  window.kakao.maps.load(() => {
    const container = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(35.868813, 128.594944), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(container, options);
    // 마커가 표시될 위치입니다
    // var markerPosition = new kakao.maps.LatLng(35.868813, 128.594944);

    // 마커 이미지 설정
    // const imageSrc = "/carrot.png";
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const imageSize = new kakao.maps.Size(30, 40); //이미지 크기
    const imgageOption = { offset: new kakao.maps.Point(15, 40) }; //중심좌표 기준 위치 조정
    // 마커 이미지 객체 생성
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgageOption);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: options.center,
      image: markerImage, //이미지 적용
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    // 마커가 드래그 가능하도록 설정합니다
    marker.setDraggable(true);
  });
});
</script>

<style scoped lang="scss"></style>
