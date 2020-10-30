var search = document.querySelector(".search");
var searching = document.querySelector(".searching");
var content = document.getElementById("contentWrapper");
search.addEventListener("click", activate);

function activate () {
   if (searching.classList.contains("active")) {
      searching.classList.remove("active");
      content.style.top = "-42px";
   } else {
      searching.classList.add("active");
      content.style.top = "0";
   }
}
