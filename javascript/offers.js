let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
document.querySelectorAll(".threebuttons").forEach(function (box) {
  let count = 1;
  let span = box.querySelector(".count");
  box.querySelector(".plus").addEventListener("click", function () {
    count++;
    span.textContent = count;
  });
  box.querySelector(".minus").addEventListener("click", function () {
    if (count > 1) {
      count--;
      span.textContent = count;
    }
  });
  box.querySelector(".plus").addEventListener("click", function () {
    box.setAttribute("data-count", count);
  });
  box.querySelector(".minus").addEventListener("click", function () {
    box.setAttribute("data-count", count);
  });
});
document.querySelectorAll(".cart-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    let card = btn.closest(".lavender, .mocha, .rose, .strawberry, .candles, .oils");
    let name = card.querySelector("h2").innerText;
    let price = parseFloat(card.querySelector("h3").innerText);
    let image = card.querySelector("img").src;
    let quantity = parseInt(card.querySelector(".count").innerText);
    let existing = cart.find(function(item){
      return item.name === name;
    });
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: quantity
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
document.querySelectorAll(".wish-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    let card = btn.closest(".lavender, .mocha, .rose, .strawberry, .candles, .oils");
    let product = {
      name: card.querySelector("h2").innerText,
      price: parseFloat(card.querySelector("h3").innerText),
      image: card.querySelector("img").src
    };
    let exists = wishlist.some(function(item){
      return item.name === product.name;
    });
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  });
});
