$(function(){

   

    $('.slider__inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
       
    });

  
    $(".rate-star").rateYo({
            rating: 5.0,
            starWidth:"14px",
            readOnly: true
        });
    

    // var mixer = mixitup('.container');
    
});