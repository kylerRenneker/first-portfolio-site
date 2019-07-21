$(function headerClickScroll() {
    $("header").find("a").click(function (e) {
        e.preventDefault();
        console.log(this)
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 'slow');
    });

    $(window).on('scroll', _.debounce(function () {
        if ($(this).scrollTop() > 60) {
            $('header').addClass('active');
            $('.nav-links a').addClass('link-black');
        }
        else {
            $('header').removeClass('active');
            $('.nav-links a').removeClass('link-black');
        }
    }, 100));

})

// $(function setSkills() {
//     let skills = ['HTML', 'CSS', 'JavaScript']
//     return skills.map(skill => {
//         return $('.landing-skills').append(`<li>${skill}<span class="landing-skill-list">•</span></li>`)
//     })
// })