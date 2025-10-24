<template>
  <div>
    <div class="search_box">
      <input v-model="keyword" placeholder="주소를 입력하세요." />
      <button @click="searchAddress">검색</button>
      <button @click="showMyLocation">🚩 내 위치</button>
    </div>
    <!-- 지도를 표시할 div 입니다 -->
    <div id="map" style="width: 100%; height: 350px"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const map = ref(null);
const keyword = ref("");
let geocoder; //주소 검색용 객체

onMounted(() => {
  // 카카오 지도 SDK가 로드된 후 실행
  window.kakao.maps.load(() => {
    const container = document.getElementById("map");
    // 기본 지도 (서울 시청 기준)
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 3,
    };
    // 지도만들기
    map.value = new kakao.maps.Map(container, options);
    // Geocoder() 검색한 주소를 좌표로 바꾸는 "주소검색기"
    geocoder = new kakao.maps.services.Geocoder();
    // 기본으로 보여줄 마커들 (서울의 유명한 장소들)
    const locations = [
      { name: "서울 시청", lat: 37.5665, lng: 126.978 },
      { name: "남산타워", lat: 37.5512, lng: 126.9882 },
      { name: "경복궁", lat: 37.5796, lng: 126.977 },
    ];
    // 장소 목록을 하나씩 돌면서 지도에 마커를 찍기
    locations.forEach((place) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(place.lat, place.lng),
        map: map.value,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        const info = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${place.name}</div>`,
        });
        info.open(map.value, marker);

        kakao.maps.event.addListener(marker, "mouseout", function () {
          info.close();
        });
      });
    });
  });
});

// 주소 검색 함수
const searchAddress = () => {
  // 입력값이 없을 경우
  if (!keyword.value.trim()) {
    alert("주소를 입력해주세요.");
  }
  // 주소를 좌표로 바꾸는 기능 사용
  geocoder.addressSearch(keyword.value, (result, status) => {
    // 검색이 성공했을때
    // console.log(status);
    // console.log(result);

    if (status === kakao.maps.services.Status.OK) {
      // 좌표값 가져오기 (x : 경도, y : 위도)
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      // 지도 중심을 그 좌표로 옮기기
      map.value.setCenter(coords);
      // 해당 위치에 마커 찍기
      const marker = new kakao.maps.Marker({
        map: map.value,
        position: coords,
      });
    } else {
      alert("검색 결과가 없습니다.");
    }
  });
};

// 내 위치로 지도 이동
const showMyLocation = () => {
  // 컴퓨터나 폰이 내 위치를 알려주는지 확인
  if (navigator.geolocation) {
    // 내 위치 불러오기
    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos);
      const lat = pos.coords.latitude; // 내 위도
      const lng = pos.coords.longitude; // 내 경도
      const currentPos = new kakao.maps.LatLng(lat, lng);
      // 지도 중심을 내 위치로 바꾸기
      map.value.setCenter(currentPos);
      // 내 위치로 마커 찍기
      new kakao.maps.Marker({
        map: map.value,
        position: currentPos,
      });
    });
  } else {
    alert("해당 브라우저는 위치정보를 지원하지 않습니다.");
  }
};
</script>

<style scoped></style>
