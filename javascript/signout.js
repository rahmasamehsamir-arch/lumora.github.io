let client = localStorage.getItem('logged');
let sign_out = document.querySelector('.out');

if(sign_out){

    if(client){
    
        sign_out.style.display = "inline-block";

   
        sign_out.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem('logged');
            alert('Signed out successfully');

            // hide again after logout
            sign_out.style.display = "none";

            window.location.href = "../index.html";
        });

    } else {
       
        sign_out.style.display = "none";
    }

}
