// var typed = new Typed('h2', {
//     strings: ["Web Designer.", "Web Developer.","Front End Developer."],
//     typeSpeed: 100,
//     backSpeed: 20,
//     smartBackspace: false,
//     loop: true
//   });
 // Typed Initiate
 if ($('.banner-content h2').length == 1) {
    var typed_strings = $('.banner-content .typed-text').text();
    var typed = new Typed('.banner-content h2', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

$(document).ready(function(){
    var bar = new ProgressBar.Line(singleprogressbar, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      
      bar.animate(1.0); 
    
    
   
})
 //   isotop
     // Portfolio filter
     var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        
    }
})
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();