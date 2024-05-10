// writing
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



//content
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entery)=>{
if(entery.isIntersecting){
  
  entery.target.classList.add('show')
}else{
  entery.target.classList.remove('show')
}
})
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))



const observerR = new IntersectionObserver((entries)=>{
entries.forEach((entery)=>{
if(entery.isIntersecting){
  
  entery.target.classList.add('showRight')
}else{
  entery.target.classList.remove('showRight')
}
})
})

const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
hiddenElementsRight.forEach((el)=>observerR.observe(el))







const sectionScaleObserver = new IntersectionObserver((entries)=>{
entries.forEach((entery)=>{
if(entery.isIntersecting){
  
  entery.target.classList.add('animateScale_After')
}else{
  entery.target.classList.remove('animateScale_After')
}
})
})

const sectionScale = document.querySelectorAll('.animateScale_Before')
sectionScale.forEach((el)=>sectionScaleObserver.observe(el))



const RollObserver = new IntersectionObserver((entries)=>{
entries.forEach((entery)=>{
if(entery.isIntersecting){
  
  entery.target.classList.add('Roll')
}else{
  entery.target.classList.remove('Roll')
}
})
})

const Roll = document.querySelectorAll('.emptyRoll')
Roll.forEach((el)=>RollObserver.observe(el))






// start our work animation
const SlideObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entery)=>{
  if(entery.isIntersecting){
    
    entery.target.classList.add('slide')
  }else{
    entery.target.classList.remove('slide')
  }
  })
  })
  
  const Slide = document.querySelectorAll('.emptySlide')
  Slide.forEach((el)=>SlideObserver.observe(el))

//end our work animation



document.addEventListener("DOMContentLoaded", function() {
const button = document.querySelector(".button");
const main = document.querySelector("main");
const sidebar = document.querySelector(".sidebar");
const sidebarItems = document.querySelectorAll(".sidebar-item");

function toggleSidebar() {

button.classList.toggle("active");
main.classList.toggle("moveToLleft");
sidebar.classList.toggle("togelSideBar")

sidebarItems.forEach(item => item.classList.toggle("active"));
}

button.addEventListener("click", toggleSidebar);

document.addEventListener("keyup", function(event) {

if (event.keyCode === 27) {
  toggleSidebar();
}
});
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

