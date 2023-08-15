const menu = document.querySelectorAll(".menu1");

menu.forEach((e) => {
  e.addEventListener("click", function () {
    window.location.href = "book.html";
  });
});
let swiperContent = new Swiper(".Swiper-content", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const hamburger = document.querySelector("i");
const active = document.querySelector(".active");
hamburger.addEventListener("click", () => {
  if (active.style.display === "none") {
    active.style.display = "block";
  } else {
    active.style.display = "none";
  }
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const github = document.querySelector(".icon i:nth-child(1)");
const instagram = document.querySelector(".icon i:nth-child(2)");
const facebook = document.querySelector(".icon i:nth-child(3)");
const twitter = document.querySelector(".icon i:nth-child(4)");

github.addEventListener("click", () => {
  window.location.href = "https://github.com/arisuryaa";
});
instagram.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/_ars.dewa_/";
});
facebook.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/profile.php?id=61550493921286";
});
twitter.addEventListener("click", () => {
  window.location.href = "https://twitter.com/DeWebb_";
});

const a = document.querySelector(".item a");

console.log(a);
