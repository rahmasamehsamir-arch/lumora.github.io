var allProducts = document.querySelectorAll(".threebuttons");
for (var i = 0; i < allProducts.length; i++) {
    (function(product) {
        var count = 1;
        var plus = product.querySelector(".plus");
        var minus = product.querySelector(".minus");
        var span = product.querySelector(".count");
        plus.addEventListener("click", function() {
            count++;
            span.textContent = count;
        });
        minus.addEventListener("click", function() {
            if (count > 1) {
                count--;
                span.textContent = count;}
        });
    })(allProducts[i]);
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
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
        let exists = wishlist.some(function(item) {
            return item.name === product.name;
        });
        if (!exists) {
            wishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
    });
});
