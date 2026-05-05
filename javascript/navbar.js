

function toggleMenu(event) {
  event.stopPropagation(); 

  document.getElementById("menu").classList.toggle("show");
}


window.addEventListener("click", function(e) {
  if (!e.target.closest(".user-menu")) {
    document.getElementById("menu").classList.remove("show");
  }
});
