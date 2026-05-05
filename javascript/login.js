
let form = document.querySelector('form');

if(form && document.querySelector('.in_mail')){
form.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.querySelector('.in_mail').value.trim();
    let password = document.querySelector('.in_word').value.trim();

    if(email === ""){
        alert("Please enter an email");
        return;
    }

    if(password === ""){
        alert("Please enter a password");
        return;
    }

    let data = localStorage.getItem(email);

    if(data === null){
        alert("Please sign up first");
        return;
    }

    let user = JSON.parse(data);

    if(user.password === password){
        localStorage.setItem('logged', email);
        window.location.href = "../index.html";
    } else {
        alert("Incorrect password");
    }
});
}
