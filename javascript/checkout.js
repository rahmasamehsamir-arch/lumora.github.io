document.addEventListener("DOMContentLoaded", function(){
    let visa = document.getElementById("visa");
    let cash = document.getElementById("cash");
    let infvisa= document.querySelectorAll(".inf-visa");
    visa.addEventListener("change", function(){
        infvisa.forEach(function(el){
            el.style.display="table-row"; });
    });
    cash.addEventListener("change" ,function(){
        infvisa.forEach(function(el){
            el.style.display="none"; });
    });
    let items = document.getElementById("items");
    let delivery = document.getElementById("delivery");
    let total = document.getElementById("total");
    let cartTotal = localStorage.getItem("cartTotal");
    let itemsvalue =cartTotal ? Number(cartTotal):0;
    let deliveryvalue = Number(delivery.innerText);
    let finaltotal= itemsvalue + deliveryvalue;
    items.innerText =itemsvalue+" EGP";
    delivery.innerText= deliveryvalue +" EGP";
    total.innerText = finaltotal +" EGP";
});
function gotopage(){
    let firstname= document.getElementById("first_name").value;
    let lastname= document.getElementById("last_name").value;
    let country = document.getElementById("country").value;
    let email= document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let phone =document.getElementById("phone").value;
    let city = document.getElementById("city").value;
   let errormessage ="";
    if(firstname==="") errormessage+= "-first name\n";
    if(lastname==="") errormessage+="-last name\n";
    if(email==="")errormessage+="-email\n";
    if(city==="")errormessage+="-city\n";
    if(phone==="")errormessage+="-phone number\n";
    if(country==="")errormessage+="-country\n";
    if(address==="")errormessage+="-address\n";
    if(errormessage!==""){
        alert("fill in these fields:\n"+ errormessage);
        return false;}
    window.location.href ="../html/shipping.html";
    return false;}
