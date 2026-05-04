
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
