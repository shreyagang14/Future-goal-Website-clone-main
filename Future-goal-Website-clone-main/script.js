function loco() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

// /swipper slide---//
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
    loop: true,
      navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next"
    }
  });
    

//hamburger

var ham = document.querySelector(".hamburger");
var line1 = document.querySelector(".hamburger .line1");
var line2 = document.querySelector(".hamburger .line2");
var close = document.querySelector(".btn-nav .btn-text-inner span:nth-child(2)");
var menu = document.querySelector(".btn-nav .btn-text-inner span:nth-child(1)");
var navs = document.querySelector(".nav-overlay");

var f=0
ham.addEventListener("click", function () {
  if (f === 0) {
    line1.style.transform = `translate(-0%, -50%) rotate(-45deg)`; 
  line1.style.top = `45%`
   line2.style.transform = `translate(-0%, -50%) rotate(45deg)`; 
    line2.style.top = `45%`;
    f = 1;
    close.style.top = `0px`
    menu.style.top = `-30px`;
    close.style.left = `-10px`
    navs.style.transform = `translateX(0%) rotate(0.001deg)`;
  }
  else {
    line1.style.transform = `translate(-0%, 0%) rotate(0deg)`; 
    line1.style.top = `20%`
    line2.style.transform = `translate(-0%, -0%) rotate(0deg)`; 
    line2.style.top = `60%`;
    f = 0;
    close.style.top = `60px`
    menu.style.top = `30px`
    navs.style.transform = `translateX(100%) rotate(0.001deg)`;

  }
})

//gsap-----
gsap.to(".loader", {
  height: "0%",
  duration:3,
  delay:2,
ease:Expo.easeInOut,
})
gsap.to(".loader img", {
  scale: 1.5,
  duration: 1.5,
  transform: `translateY(-100px)`,
ease:Expo.easeInOut,
  
})
gsap.to(".flex-col h1", {
  transform: `translateY(-100px)`,
  opacity: 1,
  delay:4,
  
})
gsap.to(".medium .initiated", {
  transform: `translateY(-100px)`,
  opacity: 1,
  delay:4,
  
})
gsap.to(".small-container", {
  scrollTrigger: {
    trigger: ".small-container",
    start: "top 50%",
    scroller: "#bg",
  },
  opacity: 1,
  ease: Expo.easeInOut,
  transform: `translateY("0px")`
})
gsap.to(".gl", {
  scrollTrigger: {
    trigger: ".gl",
    start: "top 50%",
  
    scroller: "#bg",
    // markers: true,
  },
  opacity: 1,
  ease: Expo.easeInOut,
  transform: `translateY("0px")`,
})