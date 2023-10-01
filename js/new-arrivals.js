$(document).ready(function () {
  var productsOwl = $(".products__list").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    itemElement: "article.product-card__element",
    responsive: {
      700: {
        items: 2,
      },
      1300: {
        items: 4,
      },
    },
  });

  $(".products__button--right").click(function () {
    productsOwl.trigger("next.owl.carousel");
  });

  $(".products__button--left").click(function () {
    productsOwl.trigger("prev.owl.carousel");
  });
});
