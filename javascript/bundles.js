var wishlistButtons = document.querySelectorAll(".wishlist-button");

for (var i = 0; i < wishlistButtons.length; i++) {
  wishlistButtons[i].addEventListener("click", function () {
    var btn = this;
    var card = btn.closest(".info");

    var product = {
      name: card.querySelector("h2").innerText,
      price: parseFloat(card.querySelector(".price h3").innerText),
      image: card.parentElement.querySelector("img").src
    };

    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    var exists = false;

    for (var j = 0; j < wishlist.length; j++) {
      if (wishlist[j].name === product.name) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  });
}

var cart = JSON.parse(localStorage.getItem("cart")) || [];

var productCards = document.querySelectorAll(".section > div");

for (var i = 0; i < productCards.length; i++) {
  (function (productCard) {
    var addBtn = productCard.querySelector(".one button");
    var plusBtn = productCard.querySelector(".plus");
    var minusBtn = productCard.querySelector(".minus");
    var countSpan = productCard.querySelector(".count");

    var count = 1;

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
      var name = productCard.querySelector(".product h2").innerText;
      var price = parseFloat(productCard.querySelector(".price h3").innerText);
      var image = productCard.querySelector("img").src;

      var existing = null;

      for (var j = 0; j < cart.length; j++) {
        if (cart[j].name === name) {
          existing = cart[j];
          break;
        }
      }

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
  })(productCards[i]);
}

let wishlistButtons = document.querySelectorAll(".wishlist-button");

wishlistButtons.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let card = btn.closest(".info");

        let product = {
            name: card.querySelector("h2").innerText,
            price: card.querySelector(".price h3").innerText,
            image: card.parentElement.querySelector("img").src
        };

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        let exists = wishlist.some(function(item) {
            return item.name === product.name;
        });

        if (!exists) {
            wishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }

    });

});
