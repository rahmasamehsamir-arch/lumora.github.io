
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.addEventListener("DOMContentLoaded", () => {

    let container = document.querySelector(".container");
    let emptySection = document.querySelector(".empty-wishlist");
    let title = document.querySelector(".Mycollection");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    function saveWishlist() {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function renderWishlist() {

        container.innerHTML = "";
        if (wishlist.length === 0) {
            emptySection.style.display = "block";
            container.style.display = "none";
            title.style.display = "none";
            return;
        }
        emptySection.style.display = "none";
        container.style.display = "grid";
        title.style.display = "block";

        wishlist.forEach(function (item) {

            let imgSrc = ``;

            if (Array.isArray(item.image)) {
                imgSrc = `../img/${item.image[0]}`;
            } else {
                imgSrc = `${item.image}`;
            }

            let cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, '')) || 0;
            container.innerHTML += `
    <article class="card">
        <div class="img-box">        

         <img src="${imgSrc}" />
                </div>

    <h3>${item.name}</h3>
         <p>${cleanPrice} EGP</p>

       <button class="remove-button">Remove</button>
                <button class="add-button">Add to Cart</button>

            </article>
        `;
        });
    }

    renderWishlist();
    document.addEventListener("click", function (e) {


        if (e.target.classList.contains("remove-button")) {

            let card = e.target.closest(".card");
            let name = card.querySelector("h3").innerText;
            wishlist = wishlist.filter(item => item.name !== name);
            saveWishlist();
            renderWishlist();
        }
        if (e.target.classList.contains("add-button")) {

            let card = e.target.closest(".card");
            let name = card.querySelector("h3").innerText;
            let rawPrice = card.querySelector("p").innerText;
            let cleanPrice = parseFloat(rawPrice.replace(/[^\d.]/g, ''));
            let image = card.querySelector("img").src;
            let exists = cart.find(item => item.name === name);

            if (exists) {
                exists.quantity += 1;
            } else {
                cart.push({
                    name: name,
                    price: cleanPrice,
                    image: image,
                    quantity: 1
                });
            }

            wishlist = wishlist.filter(item => item.name !== name);
            saveCart();
            saveWishlist();
            renderWishlist();

        }
    });

});



