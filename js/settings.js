/*================================================================================================================

    Custom Settings

================================================================================================================*/



jQuery.noConflict();



/* After DOM is Initialized */

jQuery(document).ready(function(){



    // Variables

    var body = jQuery("body");
        vcardPop = jQuery(".vcard_success");



    // Page Fade In

    body.delay(100).animate({opacity: 1}, 1000, 'easeInOutCirc');



    // Page Fade Out

    jQuery(window).bind("unload", function() {
    });

    body.css("overflow", "scroll");

    jQuery("a").not("#logo a, #nav a, .btn, .pretty, .jump").click(function(event){

        event.preventDefault();
        linkLocation = this.href;
        body.fadeOut(700, redirectPage);

    });

    function redirectPage() {

        window.location = linkLocation;

    }



    // Responsive

        var screenWidth = body.width();

        if (screenWidth > 880) {

            jQuery("#control").css({left: "-36%"}).delay(300).animate({left: "0"}, 700, 'easeInOutCirc');
            jQuery("#main").css({opacity: 0}).delay(1000).animate({opacity: 1}, 900, 'easeInOutCirc');
            height = jQuery(window).height() - 580;

        } else {

            height = jQuery(window).height() - 682;

        }



    // Content Padding

        jQuery("#content").css({paddingBottom: height + "px"});



    // Backstretch

        //jQuery.backstretch("demo/back.jpg"); // http://farm3.staticflickr.com/2613/3704435355_a3e53ca8d3_b.jpg

        jQuery.backstretch([
            "images/backgrounds/01.jpg",
            "images/backgrounds/02.jpg",
            "images/backgrounds/03.jpg",
            "images/backgrounds/04.jpg",
            "images/backgrounds/05.jpg",
            "images/backgrounds/06.jpg",
            "images/backgrounds/07.jpg",
            "images/backgrounds/08.jpg",
            "images/backgrounds/09.jpg",
            "images/backgrounds/10.jpg"
        ], {duration: 5000, fade: 1000});



    // Smoothscroll

        jQuery('a[href^="#"]').bind('click.smoothscroll',function (e) {

            e.preventDefault();

            var target = this.hash,
            $target = jQuery(target);

            jQuery('html, body').stop().animate({

                'scrollTop': $target.offset().top

            }, 900, 'easeInOutCirc', function () {

                window.location.hash = target;

            });

        });

        // Back To Top Link Fade In

            var jump = jQuery(".jump");

                jump.hide();

                jump.css({opacity: .7});

            jQuery(window).scroll(function () {

                if (jQuery(this).scrollTop() > 100) {

                    jump.fadeIn();

                } else {

                    jump.fadeOut();

                }

            });

            jump.hover(
                function()
                {
                    jQuery(this).animate({opacity: 1});
                },
                function()
                {
                    jQuery(this).animate({opacity: .7});
                }
            );



    // Form Border Color

        jQuery("input[type=text], textarea").focus(function() {
            jQuery(this).stop(true,true).animate({backgroundColor: "#323439"}, 200);
        });

        jQuery("input[type=text], textarea").blur(function() {
            jQuery(this).stop(true,true).animate({backgroundColor:"#eaeaea"}, 200);
        });



    // Form Label Hide

        /* Focus & Blur */

            jQuery("#contact_form p input, #contact_form p textarea").focus(function() {
                jQuery(this).css({color: "#ffffff"});
                jQuery(this).parent().find("> label").fadeOut(200);
            });

            jQuery("#contact_form p input, #contact_form p textarea").blur(function() {
                jQuery(this).css({color: "#323232"});
                jQuery(this).parent().find("> label").fadeIn(200).css({color: "#a7abad"});
            });

        /* Empty & Full */

            var input = jQuery("#contact_form p input, #contact_form p textarea");

            input.blur(function() {

                if ( jQuery(this).val() != '') {


                        jQuery(this).parent().find("> label").hide();

                } else {

                        jQuery(this).parent().find("> label").show();

                }

            });



    // Image Fade

        jQuery("a img").not(".backstretch img, #logo img").mouseover(function(){
            jQuery(this).stop(true,true);
            jQuery(this).fadeTo(300, 0.7);
        });

        jQuery("a img").not(".backstretch img, #logo img").mouseout(function(){
            jQuery(this).fadeTo(400, 1.0);
        });



    // PrettyPhoto

        jQuery(".pretty").prettyPhoto({animation_speed:"fast",slideshow:7000});



    // Background Color - Hover

        jQuery(".btn, .toggle h3").hover(
            function()
            {
                jQuery(this).stop(true,true).animate({backgroundColor: "#ff4343", color: "#fff"}, 200);
            },
            function()
            {
                jQuery(this).not(".ui-state-active").stop(true,true).animate({backgroundColor:"#323439"}, 200);
                jQuery(this).not(".btn, .ui-state-active").stop(true,true).animate({color: "#686b71"}, 200);
            }
        );



    // Logo Color - Hover

        jQuery("#logo h1, #logo a, .box a").not(".btn").hover(
            function()
            {
                jQuery(this).stop(true,true).animate({color: "#ff4343"}, 200);
            },
            function()
            {
                jQuery(this).stop(true,true).animate({color:"#ffffff"}, 200);
            }
        );



    // Menu Animation

        /* Variables */

            var nav = jQuery("#nav");
                navLink = jQuery("#nav li");

        /* CSS */

            nav.find("li:first").addClass("active");
            navLink.css({opacity: .5});

        /* Hover */

            navLink.hover(
                function()
                {
                    jQuery(this).stop(true,true).animate({opacity: 1}, 200);
                },
                function()
                {
                    jQuery(this).stop(true,true).animate({opacity: .5}, 200);
                }
            );

        /* Active */

            var topMenu = jQuery("#nav ul"),
                topMenuHeight = topMenu.outerHeight() + 15,
                menuItems = topMenu.find("a"),
                scrollItems = menuItems.map(function () {
                    var item = jQuery(jQuery(this).attr("href"));
                    if (item.length) return item
                });
            jQuery(window).scroll(function () {
                var fromTop = jQuery(this).scrollTop() + topMenuHeight;
                var cur = scrollItems.map(function () {
                    if (jQuery(this).offset().top < fromTop) return this
                });
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";
                menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active")
            });



    // vCard Popup

        jQuery("#vcard .btn").click(function() {

            vcardPop.fadeIn(700).delay(2000).fadeOut(700);

        });



    // Social Icons Animation

        /* Variables */

            var social = jQuery("#social li");

        /* CSS */

            social.css({opacity: .5});

        /* Hover */

            social.hover(
                function()
                {
                    jQuery(this).stop(true,true).animate({opacity: 1}, 200);
                },
                function()
                {
                    jQuery(this).stop(true,true).animate({opacity: .5}, 200);
                }
            );



    // Toggle

    jQuery(".toggle").accordion({
        animated: "slide",
        speed: "fast",
        autoHeight: false,
        collapsible: true,
        event: "click"
    });





    // Other - Masonry Reload

    jQuery('.toggle').bind('accordionchange', function(event, ui) {
        var $container = jQuery(".other_items");

        $container.masonry({

            itemSelector     : ".other_items li",
            isAnimated       : !Modernizr.csstransitions,
            columnWidth      : function( containerWidth ) {
                return containerWidth / 2;
            },
            animationOptions : {
                duration: 1000,
                easing: "linear",
                queue: false
            }

        });
    });



    // Footer Fade In

    jQuery(window).scroll(function() {

        if(jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - height) {

            jQuery("#footer").fadeIn();

        } else {

            jQuery("#footer").fadeOut();

        }

    });



});



/* After page is loaded */

jQuery(window).load(function(){



    // Refmove Hash

        var loc = window.location.href;
          index = loc.indexOf('#');
        if (index > 0) {
          window.location = loc.substring(0, index);
        }



    // Masonry

        var $container = jQuery(".other_items");

        $container.masonry({

            itemSelector     : ".other_items li",
            isAnimated       : !Modernizr.csstransitions,
            columnWidth      : function( containerWidth ) {
                return containerWidth / 2;
            },
            animationOptions : {
                duration: 1000,
                easing: "linear",
                queue: false
            }

        });



});
