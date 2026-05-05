let form = document.querySelector('form');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        let input_email = document.querySelector('.in_mail');
        let input_password = document.querySelector('.in_word');

        let email = input_email.value.trim();
        let password = input_password.value.trim();

        // validation
        if(email === ""){
            alert("Please enter an email");
            return;
        }

        if(password === ""){
            alert("Please enter a password");
            return;
        }

        // get data
        let data = localStorage.getItem(email);

        if(data === null){
            alert("Please sign up first");
            return;
        }

        let user_data = JSON.parse(data);

        // check password (array index 4)
        let stored_password = user_data[4];
        let first_name = user_data[0];

        if(stored_password === password){
            alert("Welcome back " + first_name);

            localStorage.setItem('logged', email);

            window.location.href = "../index.html";
        } else {
            alert("Incorrect password");
        }
    });
}
