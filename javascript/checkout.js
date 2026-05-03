document.addEventListener("DOMContentLoaded", function(){
let visaRadio = document.getElementById("visa");
let cashRadio = document.getElementById("cash");
let InfVisa = document.querySelectorAll(".inf-visa");

visaRadio.addEventListener("change", function() {
    InfVisa.forEach(function(el){
        el.style.display = "table-row";
    });
});

cashRadio.addEventListener("change", function() {
    InfVisa.forEach(function(el){
        el.style.display = "none";
    });
});
});

document.addEventListener("DOMContentLoaded", function(){

    let items = document.getElementById("items");
    let delivery = document.getElementById("delivery");
    let total = document.getElementById("total");

    let cartTotal = localStorage.getItem("cartTotal");

    if(cartTotal){

        items.innerText = cartTotal + " EGP";
       
        let finaltotal = Number(cartTotal) + Number(delivery.innerText);

        total.innerText = finaltotal + " EGP";
    }

});

function goToPage(){
    window.location.href = "../html/shipping.html";
}
