var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const navitems =  document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

document.querySelector("body").addEventListener("scroll",()=>{
  let max = sections[0]
  sections.forEach((section)=>{
    if(section.offsetTop < Math.floor(document.querySelector("body").scrollTop)+5){
      max = section.id
    }
  })

  navitems.forEach((nav)=>{
    nav.classList.remove("active")
    if (max === nav.getAttribute("data-nav")){
      nav.classList.add("active")
    }
  })
})
