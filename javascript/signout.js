let client = localStorage.getItem('logged');
let sign_out =document.querySelector('.out');
    if(sign_out)
    {
if(client){
        sign_out.style.display ='inline-block';
        sign_out.addEventListener("click",function(leave)
        { 
            leave.preventDefault();
            localStorage.removeItem('logged');
            alert('signed out successfully');
            sign_out.style.display ='none';
            window.location.href='../index.html';
        })
    }
}
else
{
    sign_out.style.display ='none';
}

