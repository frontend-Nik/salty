document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination1",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });

  new Swiper(".slides-2", {
    speed: 600,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination2",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.5,
      },
      1400: {
        slidesPerView: 3.5,
      },
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
