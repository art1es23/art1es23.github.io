import showNavigationMenu from "./modules/mobileMenu.js";
// import initScrollToTop from "./modules/actionsButtonScrollToTop.js";
import initSliders from "./modules/sliders.js";
import initAnimations from "./modules/initAnimations.js";
import initModalSliders from "./modules/modalSliders.js";
import submitForm from "./modules/submitForm.js";

window.addEventListener("load", (event) => {
  document.querySelector(".copyright-year").innerHTML =
    new Date().getFullYear();

  window.addEventListener("scroll", (e) => {
    const header = document.querySelector(".header");
    let stickyPoint = header.offsetTop;

    if (window.pageYOffset > stickyPoint) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  });

  document
    .querySelector(".button-scroll-top")
    .addEventListener("click", function (e) {
      gsap.timeline().to(".button-scroll-top", {
        opacity: 0,
        yPercent: -100,
      });
    });

  submitForm("getInTouch");
  showNavigationMenu();
  // initScrollToTop();

  initSliders();

  // window.addEventListener("resize", resizeWindow);
  if (window.innerWidth > 800) {
    initModalSliders(".project-media-slider");
  }
  // function resizeWindow() {
  //   initSliders();
  //   if (window.innerWidth > 800) {
  //     initModalSliders(".project-media-slider");
  //   }
  // }
  initAnimations();
});
