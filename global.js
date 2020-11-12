var content = document.getElementById("contentWrapper");
var header = document.getElementById("header");
var searching = document.getElementById("searching");
var search_que = document.querySelector(".search");
var searching_que = document.querySelector(".searching");
search_que.addEventListener("click", activate);

function activate () {
   if (searching_que.classList.contains("active")) {
      searching_que.classList.remove("active");
      content.style.top="-42px";
      header.style.boxShadow="0 1px 9px rgba(35, 0, 19 , .3)";
      searching.style.boxShadow="none";
   } else {
      searching_que.classList.add("active");
      content.style.top="0";
      header.style.boxShadow="none";
      searching.style.boxShadow="0 1px 9px rgba(35, 0, 19 , .3)";
   }
}
