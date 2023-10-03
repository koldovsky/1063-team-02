function showInfo() {
    
  const product = JSON.parse(localStorage.product || "{}");
  if (!product) return;
  document.querySelector(".card__title").innerText = product[0].name; // Change "title" to "name"
  document.querySelector(".card__details-text").innerText =
    product[0].description;
  document.querySelector(".card__product-code").innerHTML = "Product code " + product[0].id;
  document.querySelector(".card__price").innerHTML = "$ " + product[0].price.toFixed(2).replace('.',',');
  document.querySelector(".carousel__slide-img").src = "img/product-list/" + product[0].image;
  document.querySelector(".card__slide-img").src = "img/product-list/" + product[0].image;
}

showInfo();