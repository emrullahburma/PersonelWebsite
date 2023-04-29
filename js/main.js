const header = document.querySelector(".header");
window.addEventListener("scroll", function (e) {
  header.classList.toggle("fixed", window.scrollY > 0);
});

const menubar = document.querySelector("#menu-bar");
const menu = document.querySelector(".menu");
menubar.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

let slideIndex = [1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
