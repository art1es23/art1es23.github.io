export default function initModalSliders(triggerSliderClassName) {
  const triggerSliders = document.querySelectorAll(triggerSliderClassName);

  triggerSliders.forEach((slider) => {
    slider
      .querySelector(".swiper-wrapper")
      .addEventListener("click", createModalSlider, { once: true });

    if (window.innerWidth <= 800) {
      slider
        .querySelector(".swiper-wrapper")
        .removeEventListener("click", createModalSlider, false);
    }

    function createModalSlider(event) {
      // event.stopPropagation();
      event.preventDefault();
      const triggerInitialClasses = slider.getAttribute("class");

      const slideshowModal = document.querySelector(".slideshow-modal");
      slideshowModal.classList.remove("popin--closed");

      const wrapperSlideshowModal = slideshowModal.querySelector(
        ".slideshow-modal--wrapper"
      );

      const closeButton = slideshowModal.querySelector(".slideshow-close");

      const screen = cloneGallery(
        triggerInitialClasses,
        "project-media-slider-modal"
      );

      document.documentElement.classList.toggle("hidden");

      wrapperSlideshowModal.appendChild(screen);

      let swiperModal = new Swiper(screen, {
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        keyboard: {
          enabled: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 300,
        pagination: { el: ".swiper-pagination", clickable: true },
        // on: {
        //   resize() {
        //     swiperModal.destroy();
        //     swiperModal.init();
        //   },
        // },
      });

      actionWithPopin(slideshowModal, "close", screen);
      closeWrapper(slideshowModal, screen);
    }

    // Clone Node
    function cloneGallery(initialClasses, cloneClassName) {
      const clone = slider.cloneNode(cloneClassName);

      if (slider.classList.contains("slider-book-reader")) {
        const pagination = document.createElement("div");
        pagination.classList.add("swiper-pagination");

        const prev = document.createElement("div");
        prev.classList.add("swiper-button-prev");
        const next = document.createElement("div");
        next.classList.add("swiper-button-next");
        clone.appendChild(pagination);
        clone.appendChild(prev);
        clone.appendChild(next);
      }

      clone.className = "";
      clone.className = `${initialClasses} ${cloneClassName}`;

      const wrapperSlideshowModal = clone.querySelector(
        ".project-media-slider-wrapper"
      );

      wrapperSlideshowModal.classList.add("project-media-slider-wrapper-modal");

      const itemsFromSlideshowModal = Array.from(
        wrapperSlideshowModal.querySelectorAll(".project-media-slider__item")
      ).filter((item) => !item.classList.contains("swiper-slide-duplicate"));

      itemsFromSlideshowModal.forEach((item) => {
        item.className = "";
        item.classList.add(
          "project-media-slider__item",
          "project-media-slider__item-modal",
          "swiper-slide"
        );
        item.setAttribute("href", "#");
        item.style.opacity = "1";
        item.style.transform = "translate3d(0,0,0)";
      });
      return clone;
    }

    function actionWithPopin(item, state, modalSlider) {
      if (state === "close") {
        item
          .querySelector(".slideshow-close")
          .addEventListener("click", (e) => {
            item.classList.add("popin--closed");
            document.documentElement.classList.remove("hidden");

            modalSlider.remove();
            slider
              .querySelector(".swiper-wrapper")
              .addEventListener("click", createModalSlider, { once: true });
          });
      } else {
        item.classList.remove("popin--closed");
        document.documentElement.classList.add("hidden");
      }
    }
    function closeWrapper(item, modalSlider) {
      const wrapperSlideshowModal = document.querySelector(
        ".project-media-slider-wrapper"
      );

      item.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;

        const prev = item.querySelector(".swiper-button-prev");
        const next = item.querySelector(".swiper-button-next");
        const pagination = item.querySelector(".swiper-pagination");

        if (target !== item) {
          if (target === prev || target === next || target === pagination)
            return;
          item.classList.add("popin--closed");
          document.documentElement.classList.remove("hidden");

          modalSlider.remove();
          slider
            .querySelector(".swiper-wrapper")
            .addEventListener("click", createModalSlider, { once: true });
        }
      });
    }
  });
}
