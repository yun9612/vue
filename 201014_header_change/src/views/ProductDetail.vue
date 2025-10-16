<template>
  <div class="home">
    <div class="product_container card">
      <!-- 상품이미지 -->
      <div class="image_section">
        <img :src="selectImg" :alt="product.name" class="main_image" />
        <!-- 썸네일 -->
        <div class="thumbnails">
          <img
            class="thumb"
            v-for="(img, i) in product.images"
            :key="i"
            :src="img"
            @click="selectImg = img" />
        </div>
      </div>
      <!-- 상품 정보 -->
      <div class="info_section">
        <h1>{{ product.name }}</h1>
        <p>가격 : {{ product.price.toLocaleString() }}원</p>
        <p>상품 설명 : {{ product.description }}</p>
        <!-- 수량 선택 -->
        <div class="quantity">
          <button @click="changeQuantity(-1)"><span>-</span></button>
          <input v-model="quantity" />
          <button @click="changeQuantity(1)"><span>+</span></button>
        </div>
        <!-- 총 금액 -->
        <p class="total_price">
          총 금액 :
          <strong>{{ totalPrice.toLocaleString() }}</strong>
          원
        </p>
        <!-- 찝하기 / 구매하기 버튼 -->
        <div class="buttons">
          <button class="like" @click="toggleLike">{{ liked ? "❤️ Unlike" : "🤍 Like" }}</button>
          <button class="add_cart" @click="showModal = true">Add Cart</button>
        </div>
      </div>
    </div>
    <!-- add cart 클릭 시 모달창 -->
    <div v-if="showModal" class="modal_overlay" @click="showModal = false">
      <div class="modal_content">
        <h2>장바구니 담기</h2>
        <p>{{ product.name }}을(를) {{ quantity }}개 담으시겠습니까?</p>
        <p>총 금액 : {{ totalPrice.toLocaleString() }}원</p>
        <div class="buttons">
          <button class="add_cart" @click="comfirmBtn">확인</button>
          <button class="like">취소</button>
        </div>
      </div>
    </div>
    <!-- 상세페이지 / 리뷰 -->
    <Tab />
  </div>
</template>

<script setup>
import Tab from "@/components/Tab.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    description: "A 상품 설명",
    image: "/images/product1.png",
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    description: "B 상품 설명",
    image: "/images/product2.png",
    images: [
      "/images/product2.png",
      "/images/product1.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    description: "C 상품 설명",
    image: "/images/product3.png",
    images: [
      "/images/product3.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product4.png",
    ],
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    description: "D 상품 설명",
    image: "/images/product4.png",
    images: [
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
    ],
  },
]);

// 현재 선택된 상품 가져오기
const product = computed(() => {
  return products.value.find((p) => p.id == route.params.id) || {};
});

// 선택된 이미지
const selectImg = ref(product.value.images ? product.value.images[0] : "");

// 수량 상태
const quantity = ref(1);
// 수량 변경 함수
const changeQuantity = (amount) => {
  // console.log(amount);
  if (quantity.value + amount > 0 && quantity.value + amount <= 5) {
    quantity.value += amount;
  }
};

// 총 금액
const totalPrice = computed(() => {
  return product.value.price * quantity.value;
});

// Liked 토글
const liked = ref(false);
const toggleLike = () => {
  liked.value = !liked.value;
};

// addcart 버튼 클릭 시 모달창 뜨기
const showModal = ref(false);
// 카트 담기 확인 버튼 클릭 시
const comfirmBtn = () => {
  alert(`${product.value.name}을(를) ${quantity.value}개 담기 완료!`);
  // 확인 누르면 갯수 초기화
  quantity.value = 1;
};

</script>

<style scoped lang="scss">
.product_container {
  display: flex;
  gap: 50px;
  max-width: 800px;
  margin: auto;
  padding: 50px;
  align-items: center;

  .image_section {
    flex: 1;

    .main_image {
      width: 100%;
      display: block;
      //   max-width: 300px;
      //   border-radius: 10px;
      filter: brightness(1.1);
      margin-bottom: 10px;
    }
    .thumbnails {
      display: flex;
      justify-content: center;
      .thumb {
        width: calc(100% / 4);
      }
    }
  }
  .info_section {
    flex: 1;
    text-align: left;
    .quantity {
      display: flex;
      margin-top: 50px;
      button {
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
      }
      input {
        width: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
    .total_price {
      font-size: 20px;
      margin: 20px 0;
    }
  }
  .buttons {
    justify-content: left;
  }
}
.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  button {
    border: none;
    background-color: transparent;
    padding: 10px 20px;
    color: #fff;
  }
  .like {
    background-color: #e63946;
  }
  .add_cart {
    background-color: green;
  }
}
/* 모달창 */
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
