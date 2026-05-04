

const btn = document.querySelector(".mode");
const body = document.body;

// load saved mode
if(localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}

// toggle on click
btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // save mode
    if(body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

