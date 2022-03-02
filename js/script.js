//When resources are full loaded
$(window).on('load', function () {
    //PRELOADER
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    //PRELOADER - END

    //animations
    $(".circle-img").addClass("animated bounceIn");
    $(".home-intro").addClass("animated fadeInRight");

    $(".portfolio-item").addClass("animated fadeIn");
    $(".about-text").addClass("animated fadeIn");

});

//When document is ready (DOM Tree is loaded)
$(function () {
    /* Show & Hide White Navigation */
    //show or hide on pageload
    showHideNavigation();

    $(window).scroll(function() {
        showHideNavigation();

        //reset color of active or inactive menu items
    });

    function showHideNavigation() {
        if($(window).scrollTop() > 50){
            //show white navigation
            $("nav").addClass("white-nav-top");
            $(".nav-brand img").attr("src", "img/logo/logo-dark.png");
        }else{
            //hide white navigation
            $("nav").removeClass("white-nav-top");
            $(".nav-brand img").attr("src", "img/logo/logo.png");
        }
    }

    /* Handle click on Portfolio item */
    $(".portfolio-item").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: "iframe",
        gallery: {
            enabled: true
        }
    });

    /* Smooth scroll */
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get section id
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1100);
    });

    /* show mobile navigation */
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    });
    //hide mobile menu
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

    /* Progress bars */
    $("#skill").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });

        this.destroy();
    }, {
        offset: '70%'
    });
});
