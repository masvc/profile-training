document.addEventListener("DOMContentLoaded", () => {
  const expandButtons = document.querySelectorAll(".expand-button");

  expandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.closest(".expandable-content");
      const expandedContent = content.querySelector(".expanded-content");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // アニメーションの設定
      expandedContent.style.height = isExpanded
        ? `${expandedContent.scrollHeight}px`
        : "0";

      // 少し待ってからアニメーションを開始
      requestAnimationFrame(() => {
        expandedContent.style.height = isExpanded
          ? "0"
          : `${expandedContent.scrollHeight}px`;
        button.setAttribute("aria-expanded", !isExpanded);

        // ボタンのテキストとアイコンを更新
        button.innerHTML = isExpanded
          ? '続きを読む <i class="fas fa-chevron-down"></i>'
          : '閉じる <i class="fas fa-chevron-up"></i>';
      });
    });
  });
});
