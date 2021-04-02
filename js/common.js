"use script";
/*

let menuToggle = document.querySelector('.menuCheck');
let menuWrapper = document.getElementById('menu-navigation');

menuToggle.addEventListener('click', function openMenu(e) {

    if (e.target) {
        menuWrapper.style.transform = 'translate(0, 0)';
        this.setAttribute('checked', true);
    } else {
        menuWrapper.style.transform = 'translate(100vw, 50vh)';
    }
})*/
/*

let panel = document.querySelectorAll('.panel');

document.addEventListener('scroll', function (e) {
    let scroll = window.scrollTo() + window.innerHeight / 3;

})
*/

let footerWrapper = document.querySelector(".footer__wrapper");
let footerShadowDiv = document.querySelector(".footerLince");

footerWrapper.addEventListener("mousemove", function (e) {
  let shiftX = e.x + "px";
  let shiftY = e.y / 1.05 + "px";
  footerShadowDiv.style.cssText = `left: ${shiftX};
    top: ${shiftY};`;
});
/*
let moreAboutItem = document.querySelectorAll('.more-about__item');
let moreAboutWrapper = document.querySelector('.more-about__wrapper');

window.addEventListener('scroll', function (e) {
    let scrollItemY = window.scrollY;

    moreAboutItem.style.top = scrollItemY * 5 + 'px';
 })*/

window.addEventListener("scroll", function (e) {
  let wScroll = window.innerHeight;
  let workScroll = document.querySelector(".features");
  let workScrollH = workScroll.getBoundingClientRect().top;
  let worksItem = document.querySelectorAll(".works__item");

  let services = document.querySelector(".services");
  let servicesScroll = services.getBoundingClientRect().top;
  let servicesItem = document.querySelectorAll(".box-group__item");

  if (wScroll > workScrollH) {
    for (let i = 0; i < worksItem.length; i++) {
      setTimeout(function () {
        worksItem[i].classList.add("show");
      }, 200 * (i + 1));
    }
  }

  if (wScroll > servicesScroll) {
    for (let i = 0; i < servicesItem.length; i++) {
      setTimeout(function () {
        servicesItem[i].classList.add("show");
      }, 200 * (i + 1));
    }
  }
});
