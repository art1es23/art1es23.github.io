window.addEventListener("DOMContentLoaded", (e) => {
  gsap.registerPlugin(ScrollTrigger);

  const initHero = () => {
    const hero = document.querySelector(".hero-legend");

    const heroCaption = new SplitType(".hero-legend__caption");

    let productList = document.querySelector(".product-list");

    const tlHeroCaption = gsap.timeline();
    tlHeroCaption
      .fromTo(
        ".header",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
        }
      )
      .to(".hero-legend__caption .char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      })
      .fromTo(
        ".hero-legend__description",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(".washer__item", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".product__title",
        { opacity: 0, xPercent: -10 },
        { opacity: 1, xPercent: 0 }
      )
      .fromTo(
        ".product-thumb",
        { opacity: 0, xPercent: 100 },
        { opacity: 1, xPercent: 0 }
      )
      .fromTo(
        ".advantages-list__item",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 }
      )
      .fromTo(".img-list__item--bottom", { opacity: 0 }, { opacity: 1 })
      .fromTo(".img-list__item--top", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".product-info__item",
        { xPercent: 150, opacity: 0 },
        { xPercent: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 }
      );
    // .fromTo(".product__title", { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
    // .fromTo(
    //   productList,
    //   5,
    //   {
    //     clipPath: "circle(0% at 50% 50%)",
    //     // duration: 5,
    //   },
    //   {
    //     clipPath: "circle(100% at 50% 50%)",
    //     ease: Power3.easeOut,
    //     // duration: 5,
    //     scrollTrigger: {
    //       trigger: productList,
    //       scrub: 3,
    //       start: "top center",
    //       end: "top center-=300",
    //     },
    //   }
    // );
  };

  // const initWasher = () => {
  //   let washer = document.querySelector(".washer");
  //   let productList = document.querySelector(".product-list");

  //   let tlWasher = gsap.timeline();

  //   tlWasher
  //     .fromTo(washer, { opacity: 0 }, { opacity: 1, delay: 1.5 })
  //     .fromTo(".product__title", { x: -100 }, { x: 0 })
  //     .fromTo(
  //       productList,
  //       5,
  //       {
  //         clipPath: "circle(0% at 50% 50%)",
  //         // duration: 5,
  //       },
  //       {
  //         clipPath: "circle(100% at 50% 50%)",
  //         ease: Power3.easeOut,
  //         // duration: 5,
  //         scrollTrigger: {
  //           trigger: productList,
  //           scrub: 3,
  //           start: "top center",
  //           end: "top center-=300",
  //         },
  //       }
  //     );
  // };

  const initFooter = () => {
    const footer = document.querySelector(".footer");
    const trigger = document.querySelector(".contact-us");
    const tlFooter = gsap.timeline();

    tlFooter.fromTo(
      footer,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: Power3.easeOut,
        duration: 2,
        scrollTrigger: {
          trigger: trigger,
          scrub: 3,
          start: "top center",
          end: "top center-=300",
        },
      }
    );
  };

  const cursorInit = () => {
    Splitting();
    let cursor = document.querySelector(".cursor"),
      cursorText = cursor.querySelectorAll(".char");

    let radius = 55;

    function init() {
      rounded(radius);

      window.addEventListener("mousemove", cursorMove);
    }
    window.addEventListener("load", function () {
      init();
    });

    function rounded(radius) {
      cursorText.forEach((item, idx) => {
        let rotation = idx * (360 / cursorText.length);

        gsap.set(item, {
          transformOrigin: `0px ${radius}px`,
          x: radius,
          rotate: rotation,
        });

        gsap.set(cursor, {
          transformOrigin: "center center",
          rotation: 0,
          width: radius * 2,
          height: radius * 2,
        });
      });

      let rotate = gsap.timeline({ repeat: -1 });
      rotate.to(cursor, {
        rotation: 360,
        duration: 7.5,
        ease: "none",
      });
    }

    function cursorMove(e) {
      let mouseX = e.pageX,
        mouseY = e.pageY;

      t1 = gsap.timeline();

      t1.to(cursor, {
        duration: 1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease,
      });
    }
  };

  initHero();
  // initWasher();
  initFooter();
  cursorInit();

  window.addEventListener("resize", (e) => {
    const productImageList = document.querySelector(".img-list");
    if (e.innerWidth < 1080) {
      productImageList.style.position = "relative";
    }
  });
  //   let sections = gsap.utils.toArray(".js-section");

  //   function goToSection(i) {
  //     gsap.to(window, {
  //       scrollTo: {
  //         y: i * innerHeight,
  //         autoKill: false,
  //         ease: "Power3.easeIn",
  //       },
  //       duration: 0.1,
  //     });
  //   }

  //   ScrollTrigger.defaults({
  //     // markers: true,
  //   });

  //   sections.forEach((eachPanel, i) => {
  //     const mainAnim = gsap.timeline({ paused: true });

  //     ScrollTrigger.create({
  //       trigger: eachPanel,
  //       onEnter: () => goToSection(i),
  //     });

  //     ScrollTrigger.create({
  //       trigger: eachPanel,
  //       start: "bottom bottom",
  //       onEnterBack: () => goToSection(i),
  //     });
  //   });

  // gsap.fromTo(
  //   ".section-trigger",
  //   { autoAlpha: 0 },
  //   {
  //     duration: 0.4,
  //     autoAlpha: 1,
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".trigger",
  //       // pin: true,
  //       scrub: true,
  //       markers: true,
  //       end: window.innerHeight * 4,
  //     },
  //   }
  // );

  window.addEventListener("scroll", (e) => {
    const header = document.querySelector(".header");
    let stickyPoint = header.offsetTop;

    if (window.pageYOffset > stickyPoint) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  const initSlider = (sliderClassName) => {
    const swiper = new Swiper(sliderClassName, {
      loop: true,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // simulateTouch: false,
    });
  };

  let arraySliders = [".hero", ".product-list"];

  arraySliders.forEach((slider) => initSlider(slider));
});
