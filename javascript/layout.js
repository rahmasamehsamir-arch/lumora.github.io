



const body = document.body;
const modeBtn = document.querySelector(".mode");
const layoutBtn = document.querySelector(".layout-btn");


if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}

if (localStorage.getItem("layout") === "vertical") {
    body.classList.add("vertical");
}


if (modeBtn) {
    modeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });
}


if (layoutBtn) {
    layoutBtn.addEventListener("click", () => {
        body.classList.toggle("vertical");

        if (body.classList.contains("vertical")) {
            localStorage.setItem("layout", "vertical");
        } else {
            localStorage.setItem("layout", "horizontal");
        }
    });
}
