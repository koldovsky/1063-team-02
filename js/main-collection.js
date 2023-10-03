// Отримуємо посилання на елементи DOM
const womenLink = document.getElementById("women-link");
const menLink = document.getElementById("men-link");
const shoesLink = document.getElementById("shoes-link");

const womenClothes = document.querySelector(".main-collection__women_clothes");
const menClothes = document.querySelector(".main-collection__men-clothes");
const shoes = document.querySelector(".main-collection__shoes");

// Функція для зміни активного стану
function setActiveTab(activeTab) {
  womenLink.classList.remove("active-tab");
  menLink.classList.remove("active-tab");
  shoesLink.classList.remove("active-tab");

  if (activeTab === "women") {
    womenLink.classList.add("active-tab");
  } else if (activeTab === "men") {
    menLink.classList.add("active-tab");
  } else if (activeTab === "shoes") {
    shoesLink.classList.add("active-tab");
  }
}

// Функція для відображення відповідних блоків
function showBlock(blockToShow) {
  womenClothes.style.display = "none";
  menClothes.style.display = "none";
  shoes.style.display = "none";

  if (blockToShow === "women") {
    womenClothes.style.display = "flex";
  } else if (blockToShow === "men") {
    menClothes.style.display = "flex";
  } else if (blockToShow === "shoes") {
    shoes.style.display = "flex";
  }
}

// Додаємо обробники подій для кліку на посилання
womenLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveTab("women");
  showBlock("women");
});

menLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveTab("men");
  showBlock("men");
});

shoesLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveTab("shoes");
  showBlock("shoes");
});

// Встановлюємо стан за замовчуванням
setActiveTab("women");
showBlock("women");
