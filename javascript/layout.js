

const btn = document.querySelector(".mode");
const body = document.body;


if(localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}


btn.addEventListener("click", () => {
    body.classList.toggle("dark");

 
    if(body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
const btn = document.querySelector(".mode");

if(btn){
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });
}


if(localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}
