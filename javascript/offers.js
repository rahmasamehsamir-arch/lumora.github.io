let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* ========== QUANTITY SYSTEM ========== */
document.querySelectorAll(".threebuttons").forEach((box) => {
  let count = 1;
  const span = box.querySelector(".count");

  box.querySelector(".plus").addEventListener("click", () => {
    count++;
    span.textContent = count;
  });

  box.querySelector(".minus").addEventListener("click", () => {
    if (count > 1) {
      count--;
      span.textContent = count;
    }
  });

  

  box.querySelector(".plus").addEventListener("click", () => {
    box.setAttribute("data-count", count);
  });

  box.querySelector(".minus").addEventListener("click", () => {
    box.setAttribute("data-count", count);
  });
});

/* ========== ADD TO CART ========== */
document.querySelectorAll(".cart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".lavender, .mocha, .rose, .strawberry, .candles, .oils");

    let name = card.querySelector("h2").innerText;
    let price = parseFloat(card.querySelector("h3").innerText);
    let image = card.querySelector("img").src;
    let quantity = parseInt(card.querySelector(".count").innerText);

    let existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        name,
        price,
        image,
        quantity
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart.");
  });
});

/* ========== ADD TO WISHLIST ========== */
document.querySelectorAll(".wish-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".lavender, .mocha, .rose, .strawberry, .candles, .oils");

    let product = {
      name: card.querySelector("h2").innerText,
      price: parseFloat(card.querySelector("h3").innerText),
      image: card.querySelector("img").src
    };

    let exists = wishlist.some(item => item.name === product.name);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to wishlist.");
    }
  });
});
