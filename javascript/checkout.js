document.addEventListener("DOMContentLoaded", Function(){
    let visa = document.getElementById("visa");
    let cash = document.getElementById("cash");
    let infvisa= document.getElementById(".inf-visa");
    visa.addEventListener("change", function(){
        infvisa.forEach(functioncccccc9el){
            el.style.display="table-row";
        });
    });
    cash.addEventListener("change" ,function(){
        infvisa.forEach(function(el){
            el.style.display="none";
        });
    });
    let items = document.getElementById("items");
    let delivery = document.getElementById("delivery");
    let total = document.getElementById("total");
    let carttotal = localstorage.getItem("cartTotal");
    let itemsvalue = carttotal ? Number(carttotal):0;
    let deliveryvalue = Number(delivery.innerText);
    let finaltotal= itemsvalue + deliveryvalue;
    items.innerText = itemsvalue+"EGP";
    delivery.innerText= deliveryvalue +"EGP";
    total.innerText = finaltotal +"EGP";
});
function gotopage(){
    let firstname = document.getElementById("first_name").value;
    let lastname = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

   let errorMessage ="";
    if(firstname ==="") errorMessage+="-first name\n";
    if(secondname==="") errorMessage+="-last name\n";
    if(email==="")errorMessage+="-email\n";
    if(phone==="")errorMessage+="-phone number\n";
    if(country==="")errorMessage+="-country\n";
    if(city==="")errorMessage+="-city\n";
    if(address==="")errorMessage+="-address\n";
    if(errorMessage !==""){
        alert("please fill in thesefields:\n" + errorMessage);
        return false; 
    }
    window.location.herf ="../html/shipping.html";
    return false;
}
