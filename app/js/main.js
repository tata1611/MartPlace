$(function(){

   

    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

  
    // $('.slider__inner').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    // });

    $(".rate-star").rateYo({
            rating: 5.0,
            starWidth:"12px",
            readOnly: true
        });
    

    // var mixer = mixitup('.container');
    
});