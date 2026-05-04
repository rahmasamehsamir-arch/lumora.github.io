let client = localStorage.getItem('logged');
if(client){
    let sign_out =document.querySelector('.out');
    if(sign_out)
    {
        sign_out.addEventListener("click",function(leave)
        { 
            leave.preventDefault();
            localStorage.removeItem('logged');
            alert('signed out successfully');
            window.location.href='index.html';
        })
    }
}
else
{
    document.querySelector('.out').style.display ='none';
}
