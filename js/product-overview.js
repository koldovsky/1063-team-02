let amountCounter = document.querySelector(".card__amount-value");

function showInfo() {
  const product = JSON.parse(localStorage.product || "{}");
  if (!product) return;
  document.querySelector(".card__title").innerText = product[0].name; // Change "title" to "name"
  document.querySelector(".card__details-text").innerText =
    product[0].description;
  document.querySelector(".card__product-code").innerHTML =
    "Product code " + product[0].id;
  document.querySelector(".card__price").innerHTML =
    "$ " + product[0].price.toFixed(2).replace(".", ",");
  document.querySelector(".carousel__slide-img").src =
    "img/product-list/" + product[0].image;
  document.querySelector(".card__slide-img").src =
    "img/product-list/" + product[0].image;
}

function inputBound(value, min, max) {
  if (value == " ") return " ";
  else if (parseInt(value) < min || isNaN(parseInt(value))) return min;
  else if (parseInt(value) > max) return max;
  else return value;
}

showInfo();

document
  .querySelectorAll(".card__amount-arrow")[0]
  .addEventListener("click", (event) => {
    let amount = +document.querySelector(".card__amount-value").value;
    amount += 1;
    amountCounter.value = amount;
  });
document.querySelectorAll(".card__amount-arrow").forEach((arrow) =>
  arrow.addEventListener("mousedown", (event) => {
    event.preventDefault();
  })
);
document
  .querySelectorAll(".card__amount-arrow")[1]
  .addEventListener("click", (event) => {
    let amount = +document.querySelector(".card__amount-value").value;
    if (amount > 1) amount -= 1;
    amountCounter.value = amount;
  });
document
  .querySelector(".card__amount-value")
  .addEventListener("keyup", (event) => {
    console.log(1);
    let amount = +document.querySelector(".card__amount-value").value;
    amountCounter.value = inputBound(amount, 1, 100);
  });
