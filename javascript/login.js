let users = JSON.parse(localStorage.getItem("users")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let input_email = document.querySelector('.in_mail');
    let input_password = document.querySelector('.in_word');

    let email = input_email.value.trim();
    let password = input_password.value.trim();

    if (email === "") {
        alert("Please enter an email");
        return;
    }

    if (password === "") {
        alert("Please enter a password");
        return;
    }

    if (users === null) {
        alert('Please sign up first');
        return;
    }

    let dataOfUserThatLoggedIn = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email || users[i].password == password) {
            dataOfUserThatLoggedIn = users[i];
            break;
        }
    }

    if (dataOfUserThatLoggedIn != null) {
        alert('Welcome back ' + dataOfUserThatLoggedIn.first_name);
        localStorage.setItem('logged', email);
        window.location.href = "../index.html";
    } else {
        alert('Incorrect password');
    }
});
