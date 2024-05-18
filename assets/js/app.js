var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".testimonials", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
});
function openSignup() {
  let signup = document.querySelector(".signup");
  signup.style.display="flex"
}
function closeSignup() {
  let signup = document.querySelector(".signup");
  signup.style.display="none"
}