const PACKINGS = {
  100: {
    article: "01306",
    price: "326,40 ₽",
    oldPrice: "349,20 ₽",
  },
  500: {
    article: "01307",
    price: "1 432 ₽",
    oldPrice: "1 646 ₽",
  },
  1000: {
    article: "01308",
    price: "2 064 ₽",
    oldPrice: "2 592 ₽",
  },
  5000: {
    article: "01309",
    price: "6 320 ₽",
    oldPrice: "8 710 ₽",
  },
};

const product = document.querySelector("[data-product]");

if (product) {
  const articleEl = product.querySelector("[data-article]");
  const priceEl = product.querySelector("[data-price]");
  const oldPriceEl = product.querySelector("[data-old-price]");
  const cartButton = product.querySelector("[data-cart]");
  const cartLabel = product.querySelector("[data-cart-label]");
  let cartTimer;

  const updatePacking = (id) => {
    const packing = PACKINGS[id];

    if (!packing) {
      return;
    }

    articleEl.textContent = packing.article;
    priceEl.textContent = packing.price;
    oldPriceEl.textContent = packing.oldPrice;
  };

  product.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  product.addEventListener("change", (event) => {
    if (event.target.name !== "packing") {
      return;
    }

    updatePacking(event.target.value);
  });

  cartButton.addEventListener("click", () => {
    cartButton.classList.add("is-added");
    cartLabel.textContent = "Добавлено";
    window.clearTimeout(cartTimer);

    cartTimer = window.setTimeout(() => {
      cartButton.classList.remove("is-added");
      cartLabel.textContent = "В корзину";
    }, 1600);
  });
}
