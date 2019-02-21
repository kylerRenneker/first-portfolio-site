$(function(){
    $(".header").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top}, 'slow');
    });


$(window).scroll(function(){
    console.log('scroll');
    if($(this).scrollTop() > 40){
        $('.arrow').addClass('hide');
        $('.header').addClass('active');
        $('.nav-links a').addClass('link-black');
    }
    else {
        $('.arrow').removeClass('hide');
        $('.header').removeClass('active');
        $('.nav-links a').removeClass('link-black');
    }
})



})