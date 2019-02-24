$(function(){
    $("header").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top}, 'slow');
    });


// $(window).scroll(function(){
//     console.log('scroll');
//     if($(this).scrollTop() > 80){
//         $('.arrow').addClass('hide');
//         $('header').addClass('active');
//         $('.nav-links a').addClass('link-black');
//     }
//     else {
//         $('.arrow').removeClass('hide');
//         $('header').removeClass('active');
//         $('.nav-links a').removeClass('link-black');
//     }
// })

$(window).on('scroll', _.debounce(function() {
    // Do expensive things
    console.log(scroll);
    if($(this).scrollTop() > 60){
        // $('.arrow').addClass('hide');
        $('header').addClass('active');
        $('.nav-links a').addClass('link-black');
    }
    else {
        // $('.arrow').removeClass('hide');
        $('header').removeClass('active');
        $('.nav-links a').removeClass('link-black');
    }
  }, 100));

})