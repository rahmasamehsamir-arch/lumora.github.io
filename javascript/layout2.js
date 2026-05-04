
const layout = document.querySelector(".layout");


if (localStorage.getItem("layout") === "vertical") {
    document.body.classList.add("vertical");
}


if (layout) {
    layout.addEventListener("click", () => {
        document.body.classList.toggle("vertical");

        if (document.body.classList.contains("vertical")) {
            localStorage.setItem("layout", "vertical");
        } else {
            localStorage.setItem("layout", "horizontal");
        }
    });
}
