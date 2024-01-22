// Navbar script start
const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");

hamburger .addEventListener("click",()=>{
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
 
}))
// Navbar script End
$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav: true,
    center:false,
    navText:["<",">"],
    slideBy: 2,
   
    responsive: {
        0: {
            items: 1,
            nav:false
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
            
        }
    }
})

AOS.init();