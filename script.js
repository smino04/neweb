/* ============================================================
   NEWEB 성수 · interactions
   ============================================================ */

// --- 외부 링크 설정: 아래 주소만 바꾸면 됩니다 -------------
const LINKS = {
  kakao: "https://pf.kakao.com/", // TODO: 카카오톡 채널 상담 주소로 교체
  naver: "https://booking.naver.com/", // TODO: 네이버 예약 주소로 교체
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const target = LINKS[el.dataset.link];
  if (target) el.setAttribute("href", target);
  el.addEventListener("click", (e) => {
    if (!LINKS[el.dataset.link] || LINKS[el.dataset.link].endsWith("/")) {
      // 주소가 아직 설정되지 않은 경우 이동을 막고 안내
      e.preventDefault();
      alert("예약/상담 링크를 script.js 의 LINKS 값에 입력해 주세요.");
    }
  });
});

// --- 스크롤 등장 애니메이션 --------------------------------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
