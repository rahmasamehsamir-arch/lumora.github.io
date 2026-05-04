const allProducts = document.querySelectorAll(".threebuttons");

allProducts.forEach(product => {
    let count = 1;

    const plus = product.querySelector(".plus");
    const minus = product.querySelector(".minus");
    const span = product.querySelector(".count");

    plus.addEventListener("click", function() {
        count++;
        span.textContent = count;
    });

    minus.addEventListener("click", function() {
        if(count > 1){
            count--;
            span.textContent = count;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

  
  document.querySelectorAll(".info").forEach(infoBox => {

    let minus = infoBox.querySelector(".minus");
    let plus = infoBox.querySelector(".plus");
    let count = infoBox.querySelector(".count");

    let qty = 1;

    plus.addEventListener("click", () => {
      qty++;
      count.innerText = qty;
    });

    minus.addEventListener("click", () => {
      if (qty > 1) {
        qty--;
        count.innerText = qty;
      }
    });

  });


  document.querySelectorAll(".buttons .one button").forEach(btn => {

    btn.addEventListener("click", () => {

      let card = btn.closest(".info");

      let name = card.querySelector(".product h2").innerText;
      let price = parseFloat(
        card.querySelector(".price h3").innerText.replace("EGP", "").trim()
      );

      let image = btn.closest("div[class]").querySelector("img").src;

      let quantity = parseInt(card.querySelector(".count").innerText);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let existing = cart.find(item => item.name === name);

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({
          id: Date.now(),
          name,
          price,
          image,
          quantity
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Added to cart!");
    });

  });

});
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let buttons = document.querySelectorAll(".js");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let productCard = this.closest("div");

    let product = {
      name: productCard.querySelector("h2")?.innerText,
      price: productCard.querySelector(".price h3")?.innerText,
      img: productCard.querySelector("img")?.getAttribute("src")
    };

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist ❤️");
  });
});
