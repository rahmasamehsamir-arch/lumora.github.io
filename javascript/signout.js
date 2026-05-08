


let client = localStorage.getItem('logged');
let sign_out = document.querySelector('.out');
let sign_in = document.querySelector('a[href='login.html']');
let sign_up = document.querySelector('a[href='signup.html']');
if(sign_out){

    if(client)
    {
        sign_out.style.display = "block";
        sign_in.style.display = "none";
        sign_up.style.display = "none";
        sign_out.addEventListener("click", function(e)
        {
            e.preventDefault();
            localStorage.removeItem('logged');
            alert('Signed out successfully');

            

            window.location.href = "../index.html";
        });

    } 
    else 
    {
        sign_out.style.display = "none";
        sign_in.style.display = "inline-block";
        sign_up.style.display = "inline-block";
    }
}
