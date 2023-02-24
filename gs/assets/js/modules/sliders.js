const _setGapBetweenSlides = (slider) =>
  window.innerWidth <= 800
    ? 0
    : window.innerWidth <= 900
    ? 135
    : window.innerWidth <= 1080
    ? 150
    : window.innerWidth <= 1366
    ? 95
    : window.innerWidth <= 1600
    ? 120
    : 140;

const _setEffect = (slider) =>
  window.innerWidth <= 800 ? "slide" : "carousel";
const _setCountOfSlides = (slider) =>
  window.innerWidth <= 800 ? 1.85 : "auto";

// function actionWithSection(sliderWrapper, sliderInner, sliderSlide, state) {
//   const slider = document.querySelector(sliderWrapper);
//   const inner = slider.querySelector(sliderInner);
//   const slides = slider.querySelectorAll(sliderSlide);

//   switch (state) {
//     case "add": {
//       slider.classList.add("swiper");
//       inner.classList.add("swiper-wrapper");
//       slides.forEach((slide) => {
//         slide.classList.add("swiper-slide");
//       });
//       break;
//     }
//   }
// }

function initBookReaderSlider() {
  if (window.innerWidth <= 800) {
    // actionWithSection(
    //   ".slider-book-reader",
    //   ".swiper-wrapper",
    //   ".swiper-slide",
    //   "add"
    // );
    createSlider(".slider-book-reader", true, 0, true, 1.85);
  }
}

function initBitaloSlider() {
  createSlider(
    ".slider-bitalo",
    true,
    _setGapBetweenSlides(),
    true,
    _setCountOfSlides(),
    _setEffect()
  );
}

const createSlider = (
  sliderClassName,
  loopState = true,
  spaceBetween = 200,
  centeredSlides,
  slidesPerView = "auto",
  effect = "slide"
) => {
  let isResizeBitalo = false;

  const slider = document.querySelector(sliderClassName);
  let swiper = new Swiper(slider, {
    breakpoints: {
      800: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        spaceBetween,
        scrollbar: {
          el: ".swiper-scrollbar",
          enabled: false,
          hide: true,
        },
      },
    },

    initialSlide: sliderClassName === ".slider-bitalo" ? 3 : 0,

    slidesPerGroup: 1,
    updateOnWindowResize: true,
    loopedSlides: 1,
    loopAdditionalSlides: 1,
    effect,
    loop: loopState,
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 25,
    },
    spaceBetween,
    slidesPerView,
    centeredSlides,
    grabCursor: true,
    observer: true,
    observeParents: true,

    on: {
      beforeInit(swiper) {
        if ("carousel" !== swiper.params.effect) return;
        swiper.classNames.push(
          `${swiper.params.containerModifierClass}carousel`
        );
        const s = { watchSlidesProgress: !0, centeredSlides: !0 };
        Object.assign(swiper.params, s),
          Object.assign(swiper.originalParams, s);
      },
      progress(swiper) {
        if (swiper.params.effect !== "carousel") {
          return;
        }
        const s = swiper.slides.length;
        for (let t = 0; t < swiper.slides.length; t++) {
          const a = swiper.slides[t],
            r = swiper.slides[t].progress,
            o = Math.abs(r);
          let i = 1;
          o > 1 && (i = 1 * (o - 1) + 1);
          const n = a.querySelectorAll(".swiper-carousel-animate-opacity"),
            l = r * i * 55 + "%",
            c = 1 - 0.2 * o,
            f = s - Math.abs(Math.round(r));
          (a.style.transform = `translateX(${l}) scale(${c})`),
            (a.style.zIndex = f),
            (a.style.opacity = o > 3 ? 0 : 1),
            n.forEach((e) => {
              swiper.style.opacity = 1 - o / 3;
            });
        }
      },
      resize(swiper) {
        if (swiper.el.classList.contains("slider-book-reader")) {
          if (window.innerWidth <= 800) {
            swiper.init();
          } else {
            swiper.destroy();
          }
        }
      },
      setTransition(swiper, t) {
        if ("carousel" === swiper.params.effect)
          for (let s = 0; s < swiper.slides.length; s++) {
            const a = swiper.slides[s],
              r = a.querySelectorAll(".swiper-carousel-animate-opacity");
            (a.style.transitionDuration = `${t}ms`),
              r.forEach((e) => {
                e.style.transitionDuration = `${t}ms`;
              });
          }
      },
    },
  });

  window.addEventListener("resize", (e) => {
    try {
      if (
        swiper !== undefined &&
        swiper.el.classList.contains("slider-bitalo")
      ) {
        swiper.destroy();
        if (window.innerWidth <= 800 && !isResizeBitalo) {
          console.log("sssss");
          createSlider(".slider-bitalo", true, 0, true, 1.85);
          isResizeBitalo = true;
        }
        if (window.innerWidth > 800 && !isResizeBitalo) {
          console.log("wwwww");
          initBitaloSlider();
          isResizeBitalo = true;
        }
      }
    } catch (e) {
      // console.log("Is not defined! :(");
    }
  });
};

export default function initSliders() {
  const _sliders = [".slider-amhora", ".slider-jellywallet", ".slider-bitalo"];

  _sliders.forEach((slider) => {
    if (slider === ".slider-bitalo") {
      initBitaloSlider();
    } else {
      createSlider(slider);
    }
  });

  initBookReaderSlider();
  window.addEventListener("resize", (e) => {
    initBookReaderSlider();
  });
}
