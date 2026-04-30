function openMenu() {
  document.getElementById("sideWindow").style.right = "0";
}

function closeMenu() {
  document.getElementById("sideWindow").style.right = "-260px";
}







let reviews = document.querySelectorAll(".review");
let index = 0;

reviews[index].classList.add("active");

function changeReview(step) {
    reviews[index].classList.remove("active");

    index = index + step;

    if (index >= reviews.length) {
        index = 0;
    }

    if (index < 0) {
        index = reviews.length - 1;
    }

    reviews[index].classList.add("active");
}
