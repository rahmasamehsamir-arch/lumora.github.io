



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
const layoutBtn = document.querySelector(".layout-btn");


if (localStorage.getItem("layout") === "vertical") {
    document.body.classList.add("vertical");
}


if (layoutBtn) {
    layoutBtn.addEventListener("click", () => {
        document.body.classList.toggle("vertical");

        if (document.body.classList.contains("vertical")) {
            localStorage.setItem("layout", "vertical");
        } else {
            localStorage.setItem("layout", "horizontal");
        }
    });
}
