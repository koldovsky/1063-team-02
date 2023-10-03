(function () {
  let products;

  fetch("js/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      products = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  function productInfoClick(ev) {
    const productId = ev.target.dataset.id;
    const product = products.filter(function (data) {
      return data.id == productId;
    });

    localStorage.product = JSON.stringify(product);
  }

  function renderProducts(products) {
    document
      .querySelectorAll(".view-product")
      .forEach((link) => link.addEventListener("click", productInfoClick));
  }
  renderProducts(products);
})();
