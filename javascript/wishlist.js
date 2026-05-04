let removeButtons = document.querySelectorAll('.card button');
removeButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        btn.parentElement.remove();

    });

});


let container = document.querySelector(".container");
let emptySection = document.querySelector(".empty-wishlist");
let title = document.querySelector(".Mycollection");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

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

    wishlist.forEach(function(item) {
        container.innerHTML += `
            <article class="card">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="remove">remove</button>
            </article>
        `;
    });
}

renderWishlist();

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {

        let name = e.target.parentElement.querySelector("h3").innerText;

        wishlist = wishlist.filter(function(item) {
            return item.name !== name;
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        renderWishlist();
    }
});