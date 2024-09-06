$(document).ready(function() {
    // Testimonial Slider
    let currentSlide = 0;
    const slides = $(".testimonial");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);

    showSlide(currentSlide);
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
