const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  freemode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});
swiper.autoplay.start();
