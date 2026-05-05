let wishlistButtons = document.querySelectorAll(".wishlist-button");
wishlistButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let card = btn.closest(".info");
    let product = {
      name: card.querySelector("h2").innerText,
      price: parseFloat(card.querySelector(".price h3").innerText),
      image: card.parentElement.querySelector("img").src
    };
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let exists = wishlist.some(function(item){
      return item.name === product.name;
    });
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  });
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelectorAll(".section > div").forEach(function (productCard) {
  let addBtn = productCard.querySelector(".one button");
  let plusBtn = productCard.querySelector(".plus");
  let minusBtn = productCard.querySelector(".minus");
  let countSpan = productCard.querySelector(".count");
  let count = 1;
  plusBtn.addEventListener("click", function () {
    count++;
    countSpan.textContent = count;
  });
  minusBtn.addEventListener("click", function () {
    if (count > 1) {
      count--;
      countSpan.textContent = count;
    }
  });
  addBtn.addEventListener("click", function () {
    let name = productCard.querySelector(".product h2").innerText;
    let price = parseFloat(productCard.querySelector(".price h3").innerText);
    let image = productCard.querySelector("img").src;
    let existing = cart.find(function(item){
      return item.name === name;
    });
    if (existing) {
      existing.quantity += count;
    } else {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: count
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    count = 1;
    countSpan.textContent = 1;
  });
});
