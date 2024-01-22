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