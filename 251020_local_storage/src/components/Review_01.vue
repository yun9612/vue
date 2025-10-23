<template>
  <div class="box">
    <h2>로컬에 여러개 저장</h2>
    <!-- 입력창 -->
    <input v-model="name" placeholder="이름 입력" />
    <input v-model="rating" type="number" min="1" max="5" placeholder="별점(1~5)" />
    <textarea v-model="text" placeholder="후기를 입력하세요."></textarea>
    <button @click="saveReview">리뷰 저장하기</button>
    <hr />
    <h3>저장된 리뷰 목록</h3>
    <!-- 저장된 리뷰가 없을 때 -->
    <div class="no_review" v-if="message">
      {{ message }}
    </div>
    <!-- 저장된 리뷰가 있음 -->
    <div v-else class="review" v-for="(review, i) in reviews" :key="i">
      <p>이름 : {{ review.name }}</p>
      <p>별점 : {{ review.rating }}</p>
      <p>후기 : {{ review.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
const rating = ref("");
const text = ref("");
const reviews = ref([]);
// 리뷰 여부 문구 변수
const message = ref("");

// 페이지가 로드될때 저장된 정보 불러오기
onMounted(() => {
  const saved = localStorage.getItem("reviews");
  //   if (saved) {
  //     reviews.value = JSON.parse(saved); // 문자열을 배열로 바꿈
  //   } else {
  //     message.value = "아직 저장된 리뷰가 없습니다.";
  //   }
  reviews.value = saved ? JSON.parse(saved) : [];
  message.value = saved ? "" : "아직 저장된 리뷰가 없습니다.";
});

// 리뷰 저장하기
const saveReview = () => {
  const newReview = {
    name: name.value,
    rating: rating.value,
    text: text.value,
  };
  // 배열에 새 리뷰 추가
  reviews.value.push(newReview);
  // 저장된 리뷰가 있으면 안내문구 제거
  message.value = "";
  //   console.log(reviews.value);
  // localStorage에 저장(배열 -> 문자열로 바꾸기)
  localStorage.setItem("reviews", JSON.stringify(reviews.value));
  alert("리뷰가 저장되었습니다.");
  // 입력창 비우기
  name.value = "";
  rating.value = "";
  text.value = "";
};
</script>

<style scoped lang="scss">
.box {
  width: 320px;
  padding: 20px;
  background: #eef5ff;
  border-radius: 12px;
  h2 {
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  button {
    width: 100%;
    background: #0a66c2;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: #084e94;
    }
  }

  hr {
    margin: 30px 0;
  }

  h3 {
    margin-bottom: 20px;
  }
  .review {
    background: white;
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
  }
}
</style>
