


function toggleMenu(event) {
  event.stopPropagation(); // يمنع القفل الفوري

  document.getElementById("menu").classList.toggle("show");
}

/* يقفل لما تضغطي برا */
window.addEventListener("click", function(e) {
  if (!e.target.closest(".user-menu")) {
    document.getElementById("menu").classList.remove("show");
  }
});
