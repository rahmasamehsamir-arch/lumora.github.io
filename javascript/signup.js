let form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    let first = first_name.value.trim();
    let last = last_name.value.trim();
    let tell = phon.value.trim();
    let mail = email.value.trim();
    let pass = password.value.trim();
    let confirm = confirm_password.value.trim();

    let digits_tell = tell.replace(/\D/g, '');

    if(first === '' || last === '' || tell === '' || mail === '' || pass === '' || confirm === ''){
        alert('Please fill in all fields');
        return;
    }

    if(!mail.includes('@') || !mail.includes('.')){
        alert("Email is not valid");
        return;
    }

    if(pass !== confirm){
        alert("Passwords do not match");
        return;
    }

    if(digits_tell.length !== 11){
        alert("Phone number must be 11 digits");
        return;
    }

    let data_of_user = {
        first_name: first,
        last_name: last,
        phon: tell,
        email: mail,
        password: pass
    };

    localStorage.setItem(mail, JSON.stringify(data_of_user));

    window.location.href = "/index.html";
});
