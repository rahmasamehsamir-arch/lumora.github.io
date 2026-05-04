
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
