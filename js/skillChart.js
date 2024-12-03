document.addEventListener("DOMContentLoaded", () => {
  // スキルチャートの作成
  const skills = document.querySelectorAll("#skills tbody tr");

  skills.forEach((skill) => {
    const experienceCell = skill.querySelector("td:last-child");
    const years = parseInt(experienceCell.textContent);

    // プログレスバーの作成
    const progressBar = document.createElement("div");
    progressBar.className = "skill-progress";

    const progress = document.createElement("div");
    progress.className = "progress";
    progress.style.width = "0%";

    const percentage = Math.min(years * 20, 100);

    progressBar.appendChild(progress);
    experienceCell.appendChild(progressBar);

    // アニメーション
    setTimeout(() => {
      progress.style.width = `${percentage}%`;
    }, 200);
  });
});
