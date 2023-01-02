window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("navBar1").classList.add("on-scroll");
  } else {
    document.getElementById("navBar1").classList.remove("on-scroll");
  }
}
