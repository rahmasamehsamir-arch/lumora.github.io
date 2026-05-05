
function openMenu() {
  document.getElementById("sideWindow").style.right = "0";
}

function closeMenu() {
  document.getElementById("sideWindow").style.right = "-260px";
}

let slides = document.querySelectorAll(".card img");
let index = 0;
setInterval(function () {
  slides[index].classList.remove("active");
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides[index].classList.add("active");
}, 4000);
