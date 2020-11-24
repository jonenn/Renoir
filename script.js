//searchbar
var content = document.getElementById("contentWrapper");
var header = document.getElementById("header");
var searching = document.getElementById("searching");
var wrapper = document.getElementById("contentWrapper");
var search = document.getElementById("search");
var search_que = document.querySelector(".search");
var searching_que = document.querySelector(".searching");
search_que.addEventListener("click", activate);

//menu
var home = document.getElementById("home");
var discover = document.getElementById("discover");
var about = document.getElementById("about");

//lightbox
var lightboxDiv = document.getElementById("lightbox");
var viewport = document.getElementById("viewport");
var number = "image(1)";

function activate() {
   if (searching_que.classList.contains("active")) {
      searching_que.classList.remove("active");
      content.style.top="-42px";
      header.style.boxShadow="0 1px 9px rgba(35, 0, 19 , .3)";
      searching.style.boxShadow="none";
      wrapper.style.paddingBottom="0";
      search.src="images/search.png";
   } else {
      searching_que.classList.add("active");
      content.style.top="0";
      header.style.boxShadow="none";
      searching.style.boxShadow="0 1px 9px rgba(35, 0, 19 , .3)";
      wrapper.style.paddingBottom="42px";
      search.src="images/close.png";
   }
}

home.addEventListener("click", function() {
   home.src="images/homesel.png";
});

discover.addEventListener("click", function() {
   discover.src="images/discoversel.png";
});

about.addEventListener("click", function() {
   about.src="images/aboutsel.png";
});

var images;
var chosenOne;

function lightbox(ele) {
   images = document.getElementsByClassName("img");
   lightboxDiv.style.display="flex";
   viewport.setAttribute('content', 'width=device-width, initial-scale=1');
   document.body.style.overflow="hidden";
   document.getElementById("image-lightbox").src=images[ele].src;
   chosenOne = ele;
}

function closeLbox() {
   lightboxDiv.style.display="none";
   document.body.style.overflow="initial";
   viewport.setAttribute('content', 'width=device-width, initial-scale=1, , user-scalable=no');
}

function next() {
   if(chosenOne < images.length - 1) {
      chosenOne++;
   } else {
      chosenOne = 0;
   }
   document.getElementById("image-lightbox").src=images[chosenOne].src;
}