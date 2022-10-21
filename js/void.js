"use strict";

//Preloader
var preloader = $('.preloader');
$(window).on('load', function() {
    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

(function($) {
    /*global jQuery $*/

    //navigation scroll trigger on scroll
    var lazy = $('#header.on-scroll')
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            lazy.addClass('visible');
        } else {
            lazy.removeClass('visible');
        }
    });

    //testimonial carousel
    $('#carousel-testimonials').carousel({
        interval: 3000 //TIME IN MILLI SECONDS
    });

    // trigger page scroll trigger
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //portfolio tab nativation
    $(function() {
        var selectedClass = "";
        $(".fil-cat").on('click', function() {
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
            }, 300);
        });
    });


    // on-ready trigger
    $(document).ready(function() {

        // trigger parallax hover
        var scene = document.getElementById('scene');

        if (typeof Parallax == 'function')
            var parallax = new Parallax(scene);

        // parallax background
        if (typeof $.fn.parallax == 'function')
            $('.parallax-window').parallax();

        // Trigger skill bar
        if (typeof $.fn.appear == 'function') {
            $('.skillbar').each(function() {
                $(this).appear(function() {
                    $(this).find('.count-bar').animate({
                        width: jQuery(this).attr('data-percent')
                    }, 3000);
                    var percent = jQuery(this).attr('data-percent');
                    $(this).find('.count').html('<span>' + percent + '</span>');
                });
            });

            $('#bars').appear(function() {
                var circularBars = new CircularSkillBar("#bars .bar");
            });
        }

        // jQuery Ripples
        if (typeof $.fn.ripples == 'function') {
            try {
                $('.ripple').ripples({
                    resolution: 500,
                    perturbance: 0.04
                });
            } catch (e) {
                $('.error').show().text(e);
            }
        }

        // Fullpage model.html
        if (typeof $.fn.fullpage == 'function') {
            $('#fullpage').fullpage({

                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
                menu: '#bs-example-navbar-collapse-1',

                easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                responsiveWidth: 992,
                slideSelector: '.fullpage-slide',
                autoScrolling: true,
                fitToSection: false,
                afterResponsive: function(isResponsive) {

                }
            });
        }

        //stat-counter increment
        $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });

        // at the end trigger window scroll and resize event
        $(window).trigger('resize').trigger('scroll');
    });

}(jQuery));


/*---- helper functions ----*/

//counter increment helper
function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data('count')) {
        $this.html($this.data('count'));
    } else {
        setTimeout(function() {
            count($this)
        }, 15);
    }
}