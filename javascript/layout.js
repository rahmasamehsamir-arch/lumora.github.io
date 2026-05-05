
let body = document.body;
let modeBtn = document.querySelector(".mode");
let layoutBtn = document.querySelector(".layout");
if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}
if (localStorage.getItem("layout") === "vertical") {
    body.classList.add("vertical");
}
if (modeBtn) {
    modeBtn.addEventListener("click", function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });
}
if (layoutBtn) {
    layoutBtn.addEventListener("click", function () {
        body.classList.toggle("vertical");

        if (body.classList.contains("vertical")) {
            localStorage.setItem("layout", "vertical");
        } else {
            localStorage.setItem("layout", "");
        }
    });
}
