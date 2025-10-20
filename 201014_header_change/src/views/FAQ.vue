<template>
  <div class="home">
    <div class="faq_container">
      <h2>자주 묻는 질문 (FAQ)</h2>
      <table class="faq_table">
        <thead>
          <tr>
            <th>번호</th>
            <th>질문</th>
          </tr>
        </thead>
        <tbody>
          <!-- template은 div의 역할 -->
          <template v-for="(faq, i) in paginatedFAQs" :key="i">
            <!-- 질문 내용 -->
            <tr @click="toggleFAQ(i)" class="question_row">
              <td>{{ (currentPage - 1) * itemsPerpage + i + 1 }}</td>
              <!-- <td>{{ i + 1 }}</td> -->
              <td>{{ faq.question }}</td>
            </tr>
            <!-- 답변 내용 -->
            <tr v-if="activeIndex === i" class="answer_row">
              <td colspan="2">{{ faq.answer }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <!-- 페이지네이션 -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// faq더미 데이터
const faqs = ref([
  {
    question: "배송 기간은 얼마나 걸리나요?",
    answer: "보통 2~3일 이내에 배송됩니다.",
  },
  {
    question: "반품은 어떻게 하나요?",
    answer: "고객센터로 문의 후 반품 접수가 가능합니다.",
  },
  {
    question: "회원 가입 없이 주문할 수 있나요?",
    answer: "네, 비회원 주문도 가능합니다.",
  },
  {
    question: "상품 교환이 가능한가요?",
    answer: "구매 후 7일 이내에 교환 신청이 가능합니다.",
  },
  {
    question: "포인트는 어떻게 사용하나요?",
    answer: "결제 시 포인트를 적용할 수 있습니다.",
  },
  {
    question: "할인 쿠폰은 어디서 받나요?",
    answer: "이벤트 페이지에서 확인할 수 있습니다.",
  },
  {
    question: "배송비는 얼마인가요?",
    answer: "3만원 이상 구매 시 무료 배송입니다.",
  },
  {
    question: "주문 취소는 어떻게 하나요?",
    answer: "마이페이지에서 취소 가능합니다.",
  },
  {
    question: "해외 배송이 되나요?",
    answer: "현재 해외 배송은 지원하지 않습니다.",
  },
  {
    question: "현금 영수증 발급이 되나요?",
    answer: "결제 시 현금영수증 요청이 가능합니다.",
  },
  {
    question: "A/S는 어떻게 받나요?",
    answer: "고객센터를 통해 A/S 접수 가능합니다.",
  },
  {
    question: "적립금 사용 조건이 있나요?",
    answer: "5,000포인트 이상부터 사용 가능합니다.",
  },
  {
    question: "출고 전 변경이 가능한가요?",
    answer: "출고 전 변경 요청은 고객센터에 문의하세요.",
  },
  {
    question: "정품 인증은 어떻게 하나요?",
    answer: "정품 보증서와 함께 인증 가능합니다.",
  },
  {
    question: "기프트 카드 사용 방법은?",
    answer: "결제 페이지에서 적용할 수 있습니다.",
  },
]);

// 현재 활성화된 질문 index (아코디언 기능을 위한 상태)
const activeIndex = ref(null);
const toggleFAQ = (i) => {
  // console.log(i);
  activeIndex.value = activeIndex.value === i ? null : i;
};

// 페이지네이션 적용
// 페이지네이션 상태 (현재 페이지 저장)
const currentPage = ref(1);
// 현재 사용자가 보고있는 페이지 번호를 저장
const itemsPerpage = 5;
// 총 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(faqs.value.length / itemsPerpage);
});
// console.log(totalPages.value);

// 현재 페이지에 표시할 faq 목록 computed()
const paginatedFAQs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerpage;
  //   console.log(start);
  const result = faqs.value.slice(start, start + itemsPerpage);
  return result;
});

// 이전 버튼
const prevPage = () => {
  activeIndex.value = null;
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
// 다음 버튼
const nextPage = () => {
  activeIndex.value = null;
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped lang="scss">
@use "../assets/styles/variables" as *;
.faq_container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: $main-color;
    margin-bottom: 25px;
  }

  .faq_table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th {
      background-color: $main-color;
      color: #fff;
      padding: 14px;
      font-size: 16px;
      font-weight: 600;
    }

    td {
      border: 1px solid $border-color;
      padding: 14px;
      color: $text-color;
      font-size: 15px;
      transition: background 0.3s ease;
    }

    .question_row {
      cursor: pointer;
      &:hover {
        background-color: rgba($main-color, 0.08);
      }

      .toggle_icon {
        float: right;
        font-size: 12px;
        margin-right: 20px;
        color: $main-color;
      }
    }

    .answer_row {
      background-color: $light-bg;
      td {
        border-top: none;
        animation: fadeIn 0.3s ease;
        // background-color: red;
        text-align: center;
      }
    }
  }
  .pagination {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    button {
      background-color: $main-color;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: $radius;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        // background-color: darken($main-color, 8%);
        // background: color.adjust($primary-color, $lightness: -10%);
        transform: translateY(-2px);
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: none;
      }
    }

    span {
      font-size: 15px;
      color: $text-color;
      font-weight: 500;
    }
  }
}
</style>
