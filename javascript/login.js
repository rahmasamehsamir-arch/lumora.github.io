
let form =document.querySelector('form')
if(form){
    form.addEventListener('submit',function(e){
        e.preventDefault();
        let input_email =document.querySelector('.in_mail');
        let input_password =document.querySelector('.in_word');

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
            alert('Please sign up first');
            return;
        }
        let user_data=JSON.parse(data);
        if(user_data[4]===password)
        {
        alert('Welcome back '+user_data[0]);
        localStorage.setItem('logged',email);
        window.location.href='../index.html';
        }
        else
        {
            alert('In correct password');
        }
    })};
