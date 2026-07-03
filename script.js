/* ============================================================
   NEWEB 성수 · interactions
   ============================================================ */

// --- Team 패널: 상단 내비게이션 클릭으로만 열림 --------------
const teamLink = document.getElementById("nav-team-link");
const teamPanel = document.getElementById("director");
if (teamLink && teamPanel) {
  teamLink.addEventListener("click", (e) => {
    e.preventDefault();
    teamPanel.classList.add("is-open");
    teamPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

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
