// Fetch api for advice generator
const init = document.querySelector(".init");

const body = document.querySelector("body");
const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const advice_card = `
            <div class="advice-card">
                <p class="advice-no">advice #${data.slip.id}</p>
                <p class="advice-text">${data.slip.advice}</p>
                <div>
                <img  class="pattern" src = "../images/pattern-divider-desktop.svg">
                </div>
            </div>
            `;
      const btn = document.createElement("button");
      const img = document.createElement("img");
      img.src = "../images/icon-dice.svg";
      btn.className = "advice-btn";
      btn.append(img);

      console.log(btn);

      body.innerHTML = advice_card;
      body.appendChild(btn);

      btn.addEventListener("click", () => {
        btn.style.animationName = "rotate";
        btn.style.animationDuration = "1s";
        btn.style.animationIterationCount = 1;
        setTimeout(() => {
          fetchAdvice();
        }, 1000);
      });
    });
};

const start = document.querySelector(".start");
start.addEventListener("click", () => {
  start.style.animationName = "rotate";
  start.style.animationDuration = "1s";
  start.style.animationIterationCount = 1;
  setTimeout(() => {
    init.style.display = "none";
    fetchAdvice();
  }, 1000);
});
