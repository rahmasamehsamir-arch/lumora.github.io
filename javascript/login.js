let input_email =document.querySelector('.in_mail');
let input_password =document.querySelector('.in_word');
let login_button =document.querySelector('button[type="submit"]');
login_button.addEventListener("click",function(check)
{ 
    check.preventDefault();
    let email = input_email.value.trim();
    let password = input_password.value.trim();
    if(email==="")
    {   
        alert("Please enter an email");
        return;
    }
    if(password==="")
    {   
        alert("Please enter an password");
        return;
    }
    let data=localStorage.getItem(email);
    if(data===null)
    {
        alert('please sign up first');
        return;
    }
    let user_data=JSON.parse(data);
    if(user_data.password===password)
    {
       alert('Welcome back '+user_data.first_name);
       localStorage.setItem('logged',email);
       window.location.href='../index.html';
    }
    else
    {
        alert('In correct password,Please try again');
    }
});
