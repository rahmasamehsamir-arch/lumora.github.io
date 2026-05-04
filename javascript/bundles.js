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

let addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {

        let product = {
            name: btn.parentElement.querySelector("h3").innerText,
            price: btn.parentElement.querySelector("p").innerText
        };

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [ ];

        wishlist.push(product);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
});
