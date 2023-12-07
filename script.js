$(document).ready(function () {
  $(".loading").delay(1500).fadeOut("slow");

  $(window).scroll(function () {
    if (this.scrollY > 20) $("header .navbar").addClass("sticky");
    else $("header .navbar").removeClass("sticky");
  });

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 65,
        },
        1000,
        "swing"
      );
    }
  });

  $(function () {
    $("#locations .owl-carousel .content").matchHeight();
  });

  $("#menu .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: {
        margin: 10,
        items: 1.5,
      },
      500: {
        margin: 20,
        items: 3,
      },
      1000: {
        margin: 30,
        items: 4.5,
      },
    },
  });

  $("#locations .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: {
        margin: 10,
        items: 1,
      },
      700: {
        margin: 30,
        items: 2,
      },
    },
  });

  window.addEventListener("scroll", function () {
    var scroll = this.document.querySelector(".back-to-up");
    scroll.classList.toggle("scrolll", window.scrollY > 500);
  });
});

const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

function toggleMenu() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

const navbars = document.querySelectorAll("header .navbar .navigation ul li a");

for (let i = 0; i < navbars.length; i++) {
  navbars[i].addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

AOS.init({
  duration: 3000,
  easing: "ease-in-out",
  mirror: true,
  anchorPlacement: "top-center",
});

// const menus = document.querySelectorAll('#menu .owl-carousel .content');
// const containerMenu = document.querySelectorAll('#menu .owl-carousel .content .container');

// for(let menu=0; menu<menus.length; menu++) {
//     menus[menu].addEventListener('click', function(){
//       containerMenu[menu].classList.add("minHeigth100");
//     })
// }

if (window.pageYOffset >= 50) {
  document.querySelector("header .navbar").classList.add("sticky");
} else {
  document.querySelector("header .navbar").classList.remove("sticky");
}

gsap.from("header .navbar .logo", { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from("header .navbar .menuToggle span", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  width: 0,
  stagger: 0.2,
});
gsap.from("header .content h2", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from("header .content a", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});
gsap.from("header .bg", { opacity: 0, duration: 1, delay: 1.3, y: 30 });
