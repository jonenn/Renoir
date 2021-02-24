let extend = document.getElementById("extendIt");
let see = document.getElementById("seeIt");
let seeContent = document.getElementById("see-link");

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
   let windowScroll = this.scrollY / 5 + 1e3;
   let banner = document.getElementsByClassName("banner-bg");
   banner[0].style.transform = `scale( ${windowScroll / 1e3})`;
}

const seeMore = () => {
   let extendStyle = extend.style;
   extendStyle.height === ""
      ? (extendStyle.height = "auto",
      seeContent.innerHTML = "see less<img src='images/see-less.png'>")
      : (extendStyle.height = "",
      seeContent.innerHTML = "see more<img src='images/see-more.png'>");
}

see.addEventListener("click", seeMore);