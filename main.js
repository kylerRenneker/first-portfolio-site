$(function(){
    $("header").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top}, 'slow');
    });
    
$(window).on('scroll', _.debounce(function() {
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