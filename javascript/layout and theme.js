
const btn = document.querySelector(".mode");
const body = document.body;
if(localStorage.getItem("mode")==="dark"){
  body.classList.add("dark);
                     }
btn.addEventListener("click,()=>{
                     body.class.toggle("dark");
if (body.classList.toggle("dark")){
  localStorage.setItem("mode","light");
}
});
