



const btn = document.querySelector(".mode");
const body = document.body;


if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}


if (btn) {
    btn.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });
}
