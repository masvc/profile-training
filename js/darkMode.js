document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const icon = darkModeToggle.querySelector("i");

  // ローカルストレージから設定を読み込む
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    // アイコンの切り替え
    icon.classList.replace(
      isDark ? "fa-moon" : "fa-sun",
      isDark ? "fa-sun" : "fa-moon"
    );

    // 設定を保存
    localStorage.setItem("darkMode", isDark);
  });
});
