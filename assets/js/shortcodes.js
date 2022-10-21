/**
  * isMobile
  * Parallax
  * flatContentBox
  * flatCounter
  * flatIsotopeCase
  * flatAccordion
  * swClick
  * buttonHeart
  * goTop
  * WOW
  * toggleMenu
  * topSearch
  * flatProgressBar
  * popUpLightBox
  * Preloader
  * no_link
  * popupGallery
  * donatProgress
  * tabs
  * activeMenuAndSmoothScroll
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var Parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $(".parallax").parallax("50%", 0.2);
        }
    };

    var flatContentBox = function () {
        $(window).on('load resize', function () {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 1199px)').matches)
                mode = "mobile";
            $('.themesflat-content-box').each(function () {
                var margin = $(this).data('margin');
                if (margin) {
                    if (mode === 'desktop') {
                        $(this).attr('style', 'margin:' + $(this).data('margin'))
                    } else if (mode === 'mobile') {
                        $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var flatCounter = function () {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $('.tf-counter').offset().top - window.innerHeight;
                if (a === 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $('.tf-counter').find('.number').each(function () {
                            var to = $(this).data('to'),
                                speed = $(this).data('speed');

                            $(this).countTo({
                                to: to,
                                speed: speed
                            });
                        });
                    }
                    a = 1;
                }
            });
        }
    };


    var flatAccordion = function () {
        var args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
        $('.flat-accordion .toggle-title').on('click', function () {
            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var buttonHeart = function () { 
        $(".wishlist-button").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    }

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

    new WOW().init();

    var toggleMenu = function () {
        $(".header-menu").on("click", function () {
            $(".side-menu__block").addClass("active");
        });

        $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
            "click",
            function (e) {
                $(".side-menu__block").removeClass("active");
                e.preventDefault();
            }
        );
    }

    var topSearch=function(){
        
        $(document).on('click',function(e){
            var clickID=e.target.id;if((clickID!=='s')){
                $('.top-search').removeClass('show');
            }});
            $(document).on('click',function(e){
                var clickID=e.target.class;if((clickID!=='a111')){
                    $('.show-search').removeClass('active');
                }});
            
                $('.show-search').on('click',function(event){
                    event.stopPropagation();});
                $('.search-form').on('click',function(event){
                    event.stopPropagation();});
                $('.show-search').on('click',function(event){
                    if(!$('.top-search').hasClass("show")){
                        $('.top-search').addClass('show');
                            event.preventDefault();
                        }
                    else
                        $('.top-search').removeClass('show');
                        event.preventDefault();
                        if(!$('.show-search').hasClass("active"))
                            $('.show-search').addClass('active');
                        else
                            $('.show-search').removeClass('active'); 
                })
        ;}

        var search = function () {
            $('.header-search').on('click', function () {
                $('.form-checkbox').find('input').prop('checked', false);
            });
    
            $('a.clear-checkbox').on('click' , function(e){
              e.preventDefault();
            });
        };

    var flatProgressBar = function () {
        $('.couter').appear(function () {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                lineWidth: 5,
                size: 110,
                scaleColor: false,
                barColor: '#C297654D',
                trackColor: '#F6F6F6',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                rotate: 275,
            });

        }, {
            offset: 400
        });
    };

    var popUpLightBox = function () {
        if ($(".lightbox-image").length) {
            $(".lightbox-image").fancybox({
                openEffect: "fade",
                closeEffect: "fade",
                helpers: {
                    media: {}
                }
            });
        }
    };

    var Preloader = function () {
        setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
            $(this).remove();
        });
        }, 800);
    };

    var no_link = function(){
        $('a.nolink').on('click', function(e){
          e.preventDefault();
      });
      $('.icon_menu .icon a').on('click', function(e){
        e.preventDefault();
    });
    }

    var flcustominput = function () {
        $("input[type=file]").change(function (e) {
            $(this).parents(".uploadFile").find("#filename,#filename2").text(e.target.files[0].name);
          });          
    };

    // var popupGallery = function () {
    //     if ($().magnificPopup) {
    //     $(".popup-gallery").magnificPopup({
    //         type: "image",
    //         tLoading: "Loading image #%curr%...",
    //         removalDelay: 600,
    //         mainClass: "my-mfp-slide-bottom",
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [ 0, 1 ]
    //         },
    //         image: {
    //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //         }
    //     });
    //     }
    // } 

    var donatProgress = function () {
        $(".content-progress-box").appear(function () {
            $('.progress-bar').each(function() {
                $(this).find('.progress-content').animate({
                  width:$(this).attr('data-percentage')
                },2000);
                
                $(this).find('.progress-number-mark').animate(
                  {left:$(this).attr('data-percentage')},
                  {
                   duration: 2000,
                   step: function(now, fx) {
                     var data = Math.round(now);
                     $(this).find('.percent').html(data + '%');
                   }
                });  
              });
        });
    };

    var tabs = function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
                swiper_tab();
            });
        });
    };

    var activeMenuAndSmoothScroll = function () {
        // smoothscroll
        smoothScroll.init({
            offset: 60
        });

        var addClassOnScroll = function () {
            var windowTop = $(window).scrollTop();
            $('section[id]').each(function (index, elem) {
                var offsetTop = $(elem).offset().top;
                var outerHeight = $(this).outerHeight(true);

                if (windowTop > (offsetTop - 100) && windowTop < (offsetTop + outerHeight)) {
                    var elemId = $(elem).attr('id');
                    $(".main-nav ul li").removeClass('current-menu-item ');
                    $(".main-nav ul li a[href='#" + elemId + "']").closest('.menu-item').addClass('current-menu-item ');
                }
                if (windowTop > (offsetTop - 100) && windowTop < (offsetTop + outerHeight)) {
                    var elemId = $(elem).attr('id');
                    $(".main-nav.style-2 ul li a").removeClass('active');
                    $(".main-nav.style-2 ul li a[href='#" + elemId + "']").addClass('active');
                }
            });
        };
        // active class menu section
        $(function () {
            $(window).on('scroll', function () {
                addClassOnScroll();
            });
        });
    };


    // Dom Ready
    $(function () {
        goTop();
        flatContentBox();
        topSearch();
        flatAccordion();
        donatProgress();
        popUpLightBox();
        toggleMenu();
        Parallax();
        flatCounter();
        buttonHeart();
        flatProgressBar();
        no_link();
        flcustominput();
        // popupGallery();
        donatProgress();
        tabs();
        Preloader();
        activeMenuAndSmoothScroll();
    });

})(jQuery);


