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

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let buttons = document.querySelectorAll(".js");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {

   
    let productCard = this.closest(".lavender, .mocha, .rose, .strawberry, .lavenrose, .strawmocha");

    let product = {
      name: productCard.querySelector(".product h2")?.innerText || "No name",
      price: productCard.querySelector(".price h3")?.innerText || "No price",
      img: productCard.querySelector("img")?.getAttribute("src") || ""
    };

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    console.log(product); 

    alert("Added to wishlist ❤️");
  });
});

