document.addEventListener("DOMContentLoaded", () => {
  // スクロールアニメーション
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll("section, aside").forEach((section) => {
    observer.observe(section);
  });

  // プロフィール画像のホバーエフェクト
  const profileImg = document.querySelector("#profile img");
  profileImg.addEventListener("mouseover", () => {
    profileImg.style.transform = "scale(1.1) rotate(5deg)";
  });
  profileImg.addEventListener("mouseout", () => {
    profileImg.style.transform = "scale(1) rotate(0deg)";
  });
});
