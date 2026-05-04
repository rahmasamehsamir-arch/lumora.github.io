let input_email =document.querySelector('.in_addres');
let foreget =document.querySelector('.keep');
foreget.addEventListener("click",function(test)
{ 
    test.preventDefault();
    let email = input_email.value.trim()
    if(email==="")
    {   
        alert("Please enter an email");
        return;
    }
    let data=localStorage.getItem(email);
    if(data===null)
    {
        alert('please sign up first');
        return;
    }
    alert('Link sent to' +email);



})
