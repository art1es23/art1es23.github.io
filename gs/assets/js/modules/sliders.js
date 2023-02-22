const createSlider = (
  sliderClassName,
  loopState = true,
  spaceBetween = 200,
  centeredSlides,
  slidesPerView = "auto",
  effect = "slide"
) => {
  const slider = document.querySelector(sliderClassName);
  const swiper = new Swiper(slider, {
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
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 20,
          modifier: 1.5,
          slideShadows: false,
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
            l = r * i * 57.5 + "%",
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
        swiper.params.spaceBetween = _getGapBetweenSlides();
        if (swiper.el.classList.contains("slider-bitalo")) {
          swiper.params.effect = _getEffect();
          console.log(swiper.params.effect);
        }
        swiper.init();

        function _getEffect(slider) {
          return window.innerWidth <= 800 ? "slide" : "carousel";
        }

        function _getGapBetweenSlides(slider) {
          return window.innerWidth <= 800
            ? 0
            : window.innerWidth <= 900
            ? 135
            : window.innerWidth <= 1080
            ? 165
            : window.innerWidth <= 1366
            ? 105
            : window.innerWidth <= 1600
            ? 125
            : 150;
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

  // if (sliderClassName === "slider-book-reader" && window.innerWidth > 800) {
  //   swiper.destroy();
  // }
};

export default function initSliders() {
  const _sliders = [".slider-amhora", ".slider-jellywallet", ".slider-bitalo"];

  _sliders.forEach((slider) => {
    if (slider === ".slider-bitalo") {
      createSlider(
        slider,
        true,
        _getGapBetweenSlides(),
        true,
        _getCountOfSlides(),
        _getEffect()
      );
    } else {
      createSlider(slider);
    }
  });

  function _getGapBetweenSlides(slider) {
    return window.innerWidth <= 800
      ? 0
      : window.innerWidth <= 900
      ? 135
      : window.innerWidth <= 1080
      ? 165
      : window.innerWidth <= 1366
      ? 90
      : window.innerWidth <= 1600
      ? 125
      : 150;
  }

  function _getEffect(slider) {
    return window.innerWidth <= 800 ? "slide" : "carousel";
  }
  function _getCountOfSlides(slider) {
    return window.innerWidth <= 800 ? 1.85 : "auto";
  }
  if (window.innerWidth <= 800) {
    actionWithSection(
      ".slider-book-reader",
      ".swiper-wrapper",
      ".swiper-slide",
      "add"
    );
    createSlider(".slider-book-reader", true, 0, true, 1.85);
  }

  window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 800) {
      actionWithSection(
        ".slider-book-reader",
        ".swiper-wrapper",
        ".swiper-slide",
        "add"
      );
      createSlider(".slider-book-reader", true, 0, true, 1.85);
    }
  });
}

function actionWithSection(sliderWrapper, sliderInner, sliderSlide, state) {
  const slider = document.querySelector(sliderWrapper);
  const inner = slider.querySelector(sliderInner);
  const slides = slider.querySelectorAll(sliderSlide);

  switch (state) {
    case "add": {
      slider.classList.add("swiper");
      inner.classList.add("swiper-wrapper");
      slides.forEach((slide) => {
        slide.classList.add("swiper-slide");
      });
      break;
    }
    case "remove": {
      slider.classList.remove("swiper");
      inner.classList.remove("swiper-wrapper");
      slides.forEach((slide) => {
        slide.classList.remove("swiper-slide");
      });
      break;
    }
  }
}