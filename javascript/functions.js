function openPopup(popupName) {
  let popupEle = document.querySelector(`.popup.${popupName}`);
  popupEle.classList.add("active");
  setTimeout(function () {
    popupEle.classList.add("show");
  }, 10);
}
function closePopup() {
  let popupEle = document.querySelector(`.popup.active`);
  popupEle.classList.remove("show");
  setTimeout(function () {
    popupEle.classList.remove("active");
  }, 1000);
}
function getCandleProduct(productId) {
  let product = candles.filter(function (item) {
    return item.id === productId;
  });
  return product[0];
}
function prepareCandlePopup(productId) {
  let product = getCandleProduct(productId),
    popupCandlesEle = document.querySelector(".popup .container");
  popupCandlesEle.innerHTML = `
        <div class="img">
            <img src="../img/${product.image[0]}">
        </div>
        <div class="details">
            <div class="exit" onclick="closePopup()">
                <img src="../img/x.png">
            </div>
            <h2>
                ${product.name}
            </h2> 
            <p>
                ${product.description1}
                <br>
                ${product.description2}
                <br><br>
                ${product.description3}
            </p>
            <div class="add">
                ${printButtonCartCandles(product.id)}
                ${printButtonWishlistCandles(product.id)}
            </div>
        </div>
        `;
  openPopup("popup");
}
function getDryOilProduct(productId) {
  let product = dryoil.filter(function (item) {
    return item.id === productId;
  });
  return product[0];
}
function prepareDryOilPopup(productId) {
  let product = getDryOilProduct(productId),
    popupDryOilEle = document.querySelector(".popup .container");
  popupDryOilEle.innerHTML = `
        <div class="img">
            <img src="../img/${product.image[0]}">
        </div>
        <div class="details">
            <div class="exit" onclick="closePopup()">
                <img src="../img/x.png">
            </div>
            <h2>
                ${product.name}
            </h2> 
            <p>
                ${product.description1}
                <br>
                ${product.description2}
                <br><br>
                ${product.description3}
            </p>
            <div class="add">
                ${printButtonCartDryOil(product.id)}
                ${printButtonWishlistDryOil(product.id)}
            </div>
        </div>
        `;
  openPopup("popup");
}
function addToCartCandles(that, productId) {
  let candleProduct = getCandleProduct(productId);
  candleProduct.quantity = 1;
  cart.push(candleProduct);
  updateLocalStorage();
  that.textContent = "Remove from cart";
  that.setAttribute("onclick", `removeFromCartCandles(this,${productId})`);
}
function removeFromCartCandles(that, productId) {
  cart = cart.filter(function (item) {
    return item.id != productId;
  });
  updateLocalStorage();
  that.textContent = "Add to cart";
  that.setAttribute("onclick", `addToCartCandles(this,${productId})`);
}
function addToWishlistCandles(that, productId) {
  let candleProduct = getCandleProduct(productId);
  wishlist.push(candleProduct);
  updateLocalStorage();
  that.textContent = "Remove from wishlist";
  that.setAttribute("onclick", `removeFromWhishlistCandles(this,${productId})`);
}
function removeFromWhishlistCandles(that, productId) {
  wishlist.filter(function (item) {
    return item.id != productId;
  });
  updateLocalStorage();
  that.textContent = "Add to whishlist";
  that.setAttribute("onclick", `addToWishlistCandles(this,${productId})`);
}
function addToCartDryOil(that, productId) {
  let dryOilProduct = getDryOilProduct(productId);
  dryOilProduct.quantity = 1;
  cart.push(dryOilProduct);
  updateLocalStorage();
  that.textContent = "Remove from cart";
  that.setAttribute("onclick", `removeFromCartDryOil(this,${productId})`);
}
function removeFromCartDryOil(that, productId) {
  cart = cart.filter(function (item) {
    return item.id != productId;
  });
  updateLocalStorage();
  that.textContent = "Add to cart";
  that.setAttribute("onclick", `addToCartDryOil(this,${productId})`);
}
function addToWishlistDryOil(that, productId) {
  let dryOilProduct = getDryOilProduct(productId);
  wishlist.push(dryOilProduct);
  updateLocalStorage();
  that.textContent = "Remove from wishlist";
  that.setAttribute("onclick", `removeFromWhishlistDryOil(this,${productId})`);
}
function removeFromWhishlistDryOil(that, productId) {
  wishlist.filter(function (item) {
    return item.id != productId;
  });
  updateLocalStorage();
  that.textContent = "Add to whishlist";
  that.setAttribute("onclick", `addToWishlistDryOil(this,${productId})`);
}
function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
function getProductCart(productId) {
  let product = cart.filter(function (item) {
    return item.id === productId;
  });
  return !(product.length == 0);
}
function printButtonCartCandles(productId) {
  if (getProductCart(productId)) {
    return `<button class="cart" onclick="removeFromCartCandles(this,${productId})">
                    Remove from cart
                </button>`;
  } else {
    return `<button class="cart" onclick="addToCartCandles(this,${productId})">
                    Add to cart
                </button>`;
  }
}
function printButtonWishlistCandles(productId) {
  if (getProductCart(productId)) {
    return `<button class="wishlist" onclick="removeFromWhishlistCandles(this,${productId})">
                    Remove from Wishlist
                </button>`;
  } else {
    return `<button class="wishlist" onclick="addToWishlistCandles(this,${productId})">
                    Add to Wishlist
                </button>`;
  }
}
function printButtonCartDryOil(productId) {
  if (getProductCart(productId)) {
    return `<button class="cart" onclick="removeFromCartDryOil(this,${productId})">
                    Remove from cart
                </button>`;
  } else {
    return `<button class="cart" onclick="addToCartDryOil(this,${productId})">
                    Add to cart
                </button>`;
  }
}
function printButtonWishlistDryOil(productId) {
  if (getProductCart(productId)) {
    return `<button class="wishlist" onclick="removeFromWhishlistDryOil(this,${productId})">
                    Remove from Wishlist
                </button>`;
  } else {
    return `<button class="wishlist" onclick="addToWishlistDryOil(this,${productId})">
                    Add to Wishlist
                </button>`;
  }
}
