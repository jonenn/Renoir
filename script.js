//searchbar
let content = document.getElementById("contentWrapper");
let header = document.getElementById("header");
let searching = document.getElementById("searching");
let wrapper = document.getElementById("contentWrapper");
let search = document.getElementById("search");
let search_que = document.querySelector(".search");
let searching_que = document.querySelector(".searching");
search_que.addEventListener("click", activate);

//menu
let home = document.getElementById("home");
let discover = document.getElementById("discover");
let about = document.getElementById("about");

//lightbox
let lightboxDiv = document.getElementById("lightbox");
let viewport = document.getElementById("viewport");
let number = "image(1)";

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

let images;
let chosenOne;

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

function change(n) {
   if(n == 0) {
      if(chosenOne > n) {
         chosenOne--;
      } else {
         chosenOne = 18;
      }
      document.getElementById("image-lightbox").src=images[chosenOne].src;
   } else {
      if(chosenOne < images.length - 1) {
         chosenOne++;
      } else {
         chosenOne = 0;
      }
      document.getElementById("image-lightbox").src=images[chosenOne].src;
   }
}

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
   let windowScroll = this.scrollY + 1e3;
   let banner = document.getElementsByClassName("bannerImage");
   for(let i = 0; i < banner.length; i++) {
      banner[i].style.transform = `scale( ${windowScroll/1e3})`;
   }
}