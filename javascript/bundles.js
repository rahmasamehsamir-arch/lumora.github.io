let wishlistButtons = document.querySelectorAll(".wishlist-button");

wishlistButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let card = btn.closest(".info");

    let product = {
      name: card.querySelector("h2").innerText,
      price: parseFloat(card.querySelector(".price h3").innerText),
      image: card.parentElement.querySelector("img").src
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let exists = wishlist.some(item => item.name === product.name);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  });
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".section > div").forEach((productCard) => {
  const addBtn = productCard.querySelector(".one button");
  const plusBtn = productCard.querySelector(".plus");
  const minusBtn = productCard.querySelector(".minus");
  const countSpan = productCard.querySelector(".count");

  let count = 1;

  plusBtn.addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countSpan.textContent = count;
    }
  });

  addBtn.addEventListener("click", () => {
    const name = productCard.querySelector(".product h2").innerText;
    const price = parseFloat(productCard.querySelector(".price h3").innerText);
    const image = productCard.querySelector("img").src;

    let existing = cart.find(item => item.name === name);

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

    alert("Added to cart.");
  });
});
