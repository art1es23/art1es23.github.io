export default function t() {
  // gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);
  let t = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } }),
    $ = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".hero",
          start: "center 30%",
          end: "bottom 10%",
          scrub: !0,
          once: true,
        },
      },
    }),
    r = CSSRulePlugin.getRule(".service-post:before");

  function e(t) {
    const controlsTrigger = {
      trigger: `${t} .project-wrapper`,
      start: window.innerWidth <= 800 ? "top-=100 60%" : "top-=100 10%",
      end: window.innerWidth <= 800 ? "top 30%" : "top 10%",

      scrub: !0,
      once: true,
    };

    gsap
      .timeline({
        defaults: {
          ease: "power3.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: `${t} .project-wrapper`,
            start:
              window.innerWidth <= 800 ? "top-=200 60%" : "top-=200 center",
            end: window.innerWidth <= 800 ? "top 30%" : "top 10%",
            scrub: !0,
            once: true,
          },
        },
      })
      .fromTo(
        `${t} .project-media-slider`,
        {
          opacity: 0,
          x:
            t === ".project--book-reader" || t === ".project--jellywallet"
              ? -100
              : 100,
        },
        { opacity: 1, x: 0 }
      )
      .fromTo(
        `${t} .project-info--header`,
        {
          opacity: 0,
          x:
            t === ".project--book-reader" || t === ".project--jellywallet"
              ? 50
              : -50,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        `${t} .project-info--footer`,
        {
          opacity: 0,
          x:
            t === ".project--book-reader" || t === ".project--jellywallet"
              ? 50
              : -50,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        `${t} .swiper-pagination`,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: controlsTrigger,
        }
      )
      .fromTo(
        `${t} .swiper-button-next`,
        { opacity: 0, xPercent: -100 },
        {
          opacity: 1,
          xPercent: 0,
          scrollTrigger: controlsTrigger,
        }
      )
      .fromTo(
        `${t} .swiper-button-prev`,
        { opacity: 0, xPercent: 100 },
        {
          opacity: 1,
          xPercent: 0,
          scrollTrigger: controlsTrigger,
        }
      )
      .fromTo(
        `${t} .swiper-scrollbar`,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: controlsTrigger,
        }
      );
  }
  t
    .fromTo(
      ".hero__title",
      {
        opacity: 0,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1 }
    )
    .fromTo(
      ".header",
      { opacity: 0, yPercent: -100 },
      { opacity: 1, yPercent: 0 },
      "-=0.5"
    )
    .fromTo(
      ".hero__button",
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0 }
    )
    .fromTo(
      ".hero .social-menu__link",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, delay: 0.25, duration: 0.2, stagger: 0.05 }
    ),
    $.fromTo(".services__title", { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(
        ".services__description",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 }
      )
      .fromTo(".service-legend", { opacity: 0, x: 50 }, { opacity: 1, x: 0 })
      .fromTo(
        ".service-post",
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
        }
      )
      .fromTo(
        ".tab-navigation__item",
        { opacity: 0, y: 25 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".service-post-wrapper",
            start: "top center",
            end: "top+=100 10%",
            scrub: !0,
            once: true,
          },
          stagger: 0.25,
        }
      )
      .fromTo(
        ".service-footer__img",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".service-post-wrapper",
            start: "top+=200 30%",
            end: "top+=200 10%",
            scrub: !0,
            once: true,
          },
        }
      )
      .fromTo(
        ".project__title",
        { opacity: 0, xPercent: -5 },
        {
          opacity: 1,
          xPercent: 0,
          scrollTrigger: {
            trigger: ".projects",
            start: "top-=150 center",
            end: "top-=150 10%",
            scrub: !0,
            once: true,
          },
        }
      );

  const projects = [
    ".project--book-reader",
    ".project--amhora",
    ".project--jellywallet",
    ".project--bitalo",
  ];

  projects.forEach((item) => e(item));

  // gsap.set("#arrowSvg", { transformOrigin: "center" });
  // let c = [0, 0.115, 0.25];

  gsap
    .timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
    .fromTo(
      ".about-us__title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".about-us-wrapper",
          start: "top-=300 30%",
          end: "top-=100 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".about-us-info__item",
      {
        opacity: 0,
        x: -50,
      },
      {
        x: 0,
        opacity: 1,
        // stagger: 0.35,
        scrollTrigger: {
          trigger: ".about-us-wrapper",
          start: "top-=300 30%",
          end: "top 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".about-us-quote",
      { opacity: 0, x: 50 },
      {
        scrollTrigger: {
          trigger: ".about-us-wrapper",
          start: "top-=250 30%",
          end: "top 10%",
          scrub: !0,
          once: true,
        },
        x: 0,
        opacity: 1,
      },
      "+=1"
    )
    .fromTo(
      ".about-us-objective__title",
      {
        opacity: 0,
        xPercent: -10,
        // "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        opacity: 1,
        xPercent: 0,
        // "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: ".about-us-wrapper",
          start: "top-=100 30%",
          end: "top+=300 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".about-us-objective__img",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
    // .to(
    //   "#arrowSvg",
    //   {
    //     motionPath: {
    //       path: "#path1",
    //       align: "#path1",
    //       alignOrigin: [0.5, 0.5],
    //     },
    //     opacity: 0,
    //     onComplete: function t() {
    //       gsap.to(".last", { scale: 1, duration: 1, repeat: 1 });
    //     },
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //       trigger: ".about-us-wrapper",
    //       start: "top-=100 30%",
    //       end: "top+=300 10%",

    //       scrub: !0,
    //       once: true,
    //     },
    //   },
    //   0
    // )
    // .from(
    //   ".stop",
    //   {
    //     autoAlpha: 0,
    //     duration: 0.5,
    //     stagger: function (t) {
    //       return c[t];
    //     },
    //     onComplete: function t() {
    //       gsap.to(".last", { scale: 1, duration: 1, repeat: 1 });
    //     },
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //       trigger: ".about-us-wrapper",
    //       start: "top-=100 30%",
    //       end: "top+=300 10%",

    //       scrub: !0,
    //       once: true,
    //     },
    //   },
    //   0
    // )
    // .from(
    //   ".stopText",
    //   {
    //     autoAlpha: 0,
    //     x: "-=100",
    //     duration: 0.5,
    //     stagger: function (t) {
    //       return c[t];
    //     },
    //     onComplete: function t() {
    //       gsap.to(".last", { scale: 1, duration: 1, repeat: 1 });
    //     },
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //       trigger: ".about-us-wrapper",
    //       start: "top-=100 30%",
    //       end: "top+=300 10%",

    //       scrub: !0,
    //       once: true,
    //     },
    //   },
    //   0
    // )
    .fromTo(
      ".about-us-img",
      { opacity: 0, yPercent: 35 },
      {
        opacity: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: ".about-us-objective__title",
          start: "top-=100 30%",
          end: "center 10%",
          scrub: !0,
          once: true,
        },
      }
    );

  gsap
    .timeline({ defaults: { ease: "power4.inOut", duration: 3 } })
    .fromTo(
      ".contact-us-info__title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top-=325 85%",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".contact-us-info__description",
      { opacity: 0, xPercent: -10 },
      {
        opacity: 1,
        xPercent: 0,
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top-=325 85%",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".contacts-list",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top-=325 85%",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    // .fromTo(
    //   ".contacts-list__item",
    //   {
    //     opacity: 0,
    //     y: 50,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     stagger: 1,
    //     scrollTrigger: {
    //       trigger: ".contact-us-info",
    //       start: "top+=100 center",
    //       end: "center 10%",
    //       scrub: !0,
    // once: true,
    //     },
    //   }
    // )
    .fromTo(
      ".contact-us-form",
      {
        opacity: 0,
        // "clip-path": "polygon(50% 0, 50% 0, 50% 0, 50% 0)"
      },
      {
        opacity: 1,
        // "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top-=325 85%",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".contact-us-form__item--left",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top center",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".contact-us-form__item--right",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contact-us-info",
          start: "top center",
          end: "top+=200 10%",
          scrub: !0,
          once: true,
        },
      }
    )
    .fromTo(
      ".contact-us-form__item--full",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contacts-list",
          start: "bottom 20%",
          end: "bottom+=300 10%",
          scrub: !0,
          once: true,
        },
      }
    );

  let tlButtonScroll = gsap.timeline();

  tlButtonScroll.fromTo(
    ".button-scroll-top",
    {
      opacity: 0,
      yPercent: -100,
    },
    {
      opacity: 1,
      yPercent: 50,
      scrollTrigger: {
        trigger: ".services",
        start: "top center",
        end: "center 100",
        scrub: !0,
        once: true,
      },
    }
  );
}
