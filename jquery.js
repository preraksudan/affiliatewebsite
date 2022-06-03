{/* <script src="assets/owl-carousel/owl.carousel.js"></script> */}
$(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
    items:4,
    margin:10,
    // autoplayTimeout:1000,
    Responsive:{
    0: {
        items:1,

    },

    600: {
        items:2,

    },

    
    750: {
        items:3,

    },
    1250: {
        items:4,

    },

    1920: {
        items:5,

    }
}
})