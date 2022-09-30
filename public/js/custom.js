$(document).ready(function(){
   
    const menu = $('.menu-text');
    const headerNav = $('.header-nav');

    const hasChildLink = $('.has-child > a');
    const hasChildList = $('.has-child ul');

    const backToTop = $('.back-to-top');
    const header = $('.header');

     

    menu.click(function(){
        headerNav.slideToggle();
    });

    hasChildLink.click(function(){
        event.preventDefault();
        hasChildList.slideToggle();
    });

    $(window).scroll(function(){
        const getScrollTop = $(window).scrollTop();
        if (getScrollTop > 200) {
            backToTop.css('display', 'block');
            header.addClass('header-fixed slideInDown');
        }

        else {
            backToTop.css('display', 'none');
            header.removeClass('header-fixed slideInDown');
        }
    });

    backToTop.click(function() {
        $('html, body').animate({
            scrollTop: 0,
        },
            "slow"
        )
    });


    var swiper = new Swiper(".swiper-testimonials", {
        slidePerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteaction: false,
        },
        pagination: {
            el:".swiper-pagination",
            clickable: true
        },

    });
});