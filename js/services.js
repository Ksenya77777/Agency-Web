var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 84,
  autoplay: 
    {
      delay: 2000,
    },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      
    },
    "@0.75": {
      slidesPerView: 2,
      
    },
    "@1.00": {
      slidesPerView: 3,
      
    },
    "@1.50": {
      slidesPerView: 4,
     
    },
  },
});