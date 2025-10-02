<template>
  <div>
    <h2>로그인 폼</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="아이디 입력" v-model="userId" />
      <input type="password" placeholder="비밀번호 입력" v-model="userPW" />
      <button type="submit">로그인</button>
    </form>
    <p>아이디 : {{ userId }}</p>
    <p>비밀번호 : {{ userPW }}</p>
    <h2>체크박스</h2>
    <form @submit.prevent="reserve">
      <label>
        <input type="checkbox" v-model="agree" />
        이용약관 동의
      </label>
      <select v-model="product">
        <option value="사과">사과</option>
        <option value="바나나">바나나</option>
        <option value="포도">포도</option>
      </select>
      <button type="submit">예약하기</button>
    </form>
    <p>약관 동의 : {{ agree }}</p>
    <p>선택한 상품 : {{ product }}</p>
    <h2>라디오</h2>
    <label>
      <input type="radio" value="팝" v-model="music" name="music" />
      팝
    </label>
    <label>
      <input type="radio" value="록" v-model="music" name="music" />
      록
    </label>
    <label>
      <input type="radio" value="재즈" v-model="music" name="music" />
      재즈
    </label>
    <p>선택한 장르 : {{ music }}</p>
    <h2>여러개 체크하기</h2>
    <label>
      <input type="checkbox" value="피자" v-model="foods" />
      피자
    </label>
    <label>
      <input type="checkbox" value="햄버거" v-model="foods" />
      햄버거
    </label>
    <label>
      <input type="checkbox" value="치킨" v-model="foods" />
      치킨
    </label>
    <p>선택한 음식 : {{ foods.join("/") }}</p>
    <button @click="showFoods">주문하기</button>
    <h2>예약 날짜 선택</h2>
    <input type="date" v-model="reserveDate" />
    <p>선택한 날짜 : {{ reserveDate }}</p>
    <button @click="confirmDate">예약하기</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 아이디 비밀번호
const userId = ref("");
const userPW = ref("");
const login = () => {
  alert(`로그인 성공! 아이디 : ${userId.value}, 비밀번호 : ${userPW.value}`);
};

// checkbox
const agree = ref(false);
const product = ref("사과");
const reserve = () => {
  alert(`상품 : ${product.value}, 약관 동의 : ${agree.value}`);
};

// radio
const music = ref(""); //처음에는 아무것도 선택 안됨

// 다중 선택
const foods = ref([]);
const showFoods = () => {
  alert(`선택한 음식 : ${foods.value.join("/")}`);
};

// 예약 날짜 선택
const reserveDate = ref("");
const confirmDate = () => {
  alert(`예약 날짜 : ${reserveDate.value}`);
};
</script>

<style scoped></style>
