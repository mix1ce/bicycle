function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();
;

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
