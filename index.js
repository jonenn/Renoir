window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
   let windowScroll = this.scrollY / 5 + 1e3;
   let banner = document.getElementsByClassName("banner-bg");
   banner[0].style.transform = `scale( ${windowScroll / 1e3})`;
}
