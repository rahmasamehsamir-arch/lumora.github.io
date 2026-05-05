let popupkeyCandles = document.querySelector(".popupkeyCandles"),
    popupkeydryoil = document.querySelector(".popupkeydryoil"),
    boxOfPopup = document.querySelector(".popup .container"),
    popup = document.querySelector('.popup'),
    cart = [],
    wishlist = [];
if (localStorage.getItem('cart') == null) {
    updateLocalStorage();
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
}
popupkeyCandles.addEventListener("click", function () {
    let popup = document.querySelector(".popup.Candles");
    openPopup('Candles');
});
popupkeydryoil.addEventListener("click", function () {
    let popup = document.querySelector(".popup.dryoil");
    openPopup('dryoil');
});
for (let i = 1; i < candles.length; i++) {
    let candlesEle = document.querySelector('.candles .cards'),
        currentProduct = candles[i];
    candlesEle.innerHTML += `
    <div class="card">
        <div class="main">
            <img src="../img/${currentProduct.image[0]}">
            <div class="over">
                <img src="../img/${currentProduct.image[1]}">
            </div>
        </div>
        <div class="space">
        </div>
        <div class="search">
            <img src="../img/search.png" class="popupkeyCandles" onclick="prepareCandlePopup(${currentProduct.id})">
        </div>
        <p>
            ${currentProduct.price}EGP
        </p>
        <h3>
            ${currentProduct.name}
        </h3>
    </div>
    `;
}
for (let i = 1; i < dryoil.length; i++) {
    let dryoilEle = document.querySelector('.dryOil .cards'),
        currentProduct = dryoil[i];
    dryoilEle.innerHTML += `
    <div class="card">
        <div class="main">
            <img src="../img/${currentProduct.image[0]}">
            <div class="over">
                <img src="../img/${currentProduct.image[1]}">
            </div>
        </div>
        <div class="space">
        </div>
        <div class="search">
            <img src="../img/search.png" class="popupkeydryoil" onclick="prepareDryOilPopup(${currentProduct.id})">
        </div>
        <p>
            ${currentProduct.price}EGP
        </p>
        <h3>
            ${currentProduct.name}
        </h3>
    </div>
    `;
}

boxOfPopup.addEventListener("click", function (e) {
    e.stopPropagation();
});
