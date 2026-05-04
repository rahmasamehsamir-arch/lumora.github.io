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
