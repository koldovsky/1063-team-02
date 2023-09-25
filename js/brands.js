jQuery(function() {
        $("#brands-carousel").owlCarousel({
            items : 4,
            nav: true,
            navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z'/></svg>", 
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z'/></svg>"],
            responsive:{
                0:{
                    items:1
                },
                766:{
                    items:2
                },
                990:{
                    items:4
                }
            }
        });
});
