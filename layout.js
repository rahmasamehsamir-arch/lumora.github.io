

if (localStorage.getItem("layout") === "alt") {
  categories.classList.add("alt-layout");
}


layoutBtn.onclick = () => {
  categories.classList.toggle("alt-layout");

  if (categories.classList.contains("alt-layout")) {
    localStorage.setItem("layout", "alt");
  } else {
    localStorage.setItem("layout", "default");
  }
};
