class TypingEffect {
  constructor(element, words, waitTime = 3000) {
    this.element = element;
    this.words = words;
    this.waitTime = waitTime;
    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="typing">${this.txt}</span>`;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.waitTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-effect");
  const words = [
    "エンジニア",
    "経営者",
    "コンサルタント",
    "プロジェクトマネージャー",
  ];
  new TypingEffect(typingElement, words);
});
