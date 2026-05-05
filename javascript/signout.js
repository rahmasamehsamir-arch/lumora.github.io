let sign_out = document.querySelector('.out');
let client = localStorage.getItem('logged');

if(sign_out){
    if(client){
        sign_out.style.display = "inline-block";

        sign_out.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem('logged');
            window.location.href = "../index.html";
        });

    } else {
        sign_out.style.display = "none";
    }
}
