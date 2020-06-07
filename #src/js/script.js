@@include('./_ibg.js');

let menuBurger = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu__body");
let body = document.querySelector("body");


menuBurger.addEventListener("click", function (event) {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
})


var swiper = new Swiper('.swiper-container', {
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
