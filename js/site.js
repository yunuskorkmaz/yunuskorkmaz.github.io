/**
 * Created by Yunus on 22.3.2015.
 */

$(function() {



    $('.page-scroll a').click(function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutQuad');
        event.preventDefault();
    });


    // responsive menu

    $('.materialboxed').materialbox();

    $(".button-collapse").sideNav();

    // parallax
    $(".parallax").parallax();



        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },6000);
            jQuery(this).find('.skill-bar-percent').html(jQuery(this).attr('data-percent'));
        });


        // portfolio
            $('.portfolio-wrapper').mouseover(function(){
                $(this).find('img').stop().animate({top:'-35px'});
                $(this).find('.label').stop().animate({bottom:'0px'});
            });

            $('.portfolio-wrapper').mouseout(function(){
                $(this).find('img').stop().animate({top:'0px'});
                $(this).find('.label').stop().animate({bottom:'-42px'});
            });

       /*     $('#portfoliolist .portfolio-item').show();
            $('#filters span').on('click',function(){
               var filtre = $(this).attr('data-filter');
                $('#filters span').removeClass("active");
                $(this).addClass("active");
                if(filtre == "all")
                {
                    $('#portfoliolist .portfolio-item').hide();
                    $('#portfoliolist .portfolio-item').slideDown('slow');
                }
                else
                {

                    $('#portfoliolist .portfolio-item').hide();
                    $('#portfoliolist').find("div[data-cat='"+filtre+"']").slideDown('slow');


                }
                return false;
            });

*/
        // #portfolio








});

