<template>
  <div>
    <div class="login_box">
      <h2>회원가입 / 로그인</h2>
      <!-- 회원가입 -->
      <div v-if="mode === 'signup'" class="form">
        <h3>회원가입</h3>
        <input v-model="signupEmail" placeholder="이메일" />
        <input v-model="signupPW" type="password" placeholder="비밀번호" />
        <button @click="signup">가입하기</button>
        <p @click="mode = 'login'">로그인하러 가기</p>
      </div>
      <!-- 로그인 -->
      <div v-else class="form">
        <h3>로그인</h3>
        <input v-model="loginEmail" placeholder="이메일" />
        <input v-model="loginPW" type="password" placeholder="비밀번호" />
        <button @click="login">로그인</button>
        <p @click="mode = 'signup'">회원가입하러 가기</p>
      </div>
      <hr />
      <!-- 로그인 성공 시 -->
      <div v-if="currentUser">
        <h3>환영합니다. {{ currentUser.email }}님</h3>
        <button @click="logout">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const mode = ref("signup");
const signupEmail = ref("");
const signupPW = ref("");
const loginEmail = ref("");
const loginPW = ref("");
// 현재 로그인한 사용자
const currentUser = ref(null);
// 페이지 열렸을때 로그인 되있는 상태
onMounted(() => {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser.value = JSON.parse(savedUser);
  }
});

// 회원가입
const signup = () => {
  if (!signupEmail.value || !signupPW.value) {
    alert("이메일과 비밀번호를 입력하세요.");
    return;
  }
  // 기존 사용자 불러오기
  //   const saved = localStorage.getItem("users");
  //   const users = saved ? JSON.parse(saved) : [];
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  //   중복 이메일 확인
  const exist = users.find((u) => u.email === signupEmail.value);
  if (exist) {
    alert("이미 가입된 이메일입니다.");
    return;
  }

  // 새 사용자 추가
  const newUser = {
    email: signupEmail.value,
    pw: signupPW.value,
  };
  users.push(newUser);
  // localStorage 저장
  localStorage.setItem("users", JSON.stringify(users));
  alert("회원가입 완료! 로그인해주세요.");
  signupEmail.value = "";
  signupPW.value = "";
  mode.value = "login";
};

// 로그인
const login = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === loginEmail.value && u.pw === loginPW.value);
  if (user) {
    alert("로그인 성공!");
    currentUser.value = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    loginEmail.value = "";
    loginPW.value = "";
  } else {
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
  }
};

// 로그아웃
const logout = () => {
  localStorage.removeItem("currentUser");
  currentUser.value = null;
  alert("로그아웃 되었습니다.");
};
</script>

<style scoped lang="scss">
.login_box {
  width: 330px;
  margin: 40px auto;
  padding: 20px;
  background: #f5f7ff;
  border-radius: 12px;
  text-align: center;
  .form {
    padding: 20px 0;
    h3 {
      margin-bottom: 20px;
    }
  }
}
input {
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
}
</style>
