$(document).ready(function() {
    
    /*===========================================================
        Range Slider
    =============================================================*/
    $("#sliderRangeWargo").slider({
        range   : true,
        min     : 0,
        max     : 500,
        values  : [0, 500],
        slide   : function(event, ui) {
            $("#minPrice").text("\\" + ui.values[0]);
            $("#maxPrice").text("\\" + ui.values[1]);
        }
    });
    //init value
    $("#minPrice").text("\\" + $("#sliderRangeWargo").slider("values", 0));
    $("#maxPrice").text("\\" + $("#sliderRangeWargo").slider("values", 1));



    /*===========================================================
        Toggle List Wiew and Grid Wiew
    =============================================================*/
    $("[data-view]").click(function() {
        var target = $(this).data("view");
        $(this).find('.icon').toggleClass('icon-wargo-grid-view icon-wargo-list-view');
        $(target).find('.grid-view-item').toggleClass('list-view-item list-view-item-filter');
        var $flexslider = $(target).find('.flexslider');
        if($flexslider.length){
            $flexslider.data('flexslider').resize();
            $flexslider.data('flexslider').resize();
        }
        
    });



    /*===========================================================
        Slider Banner Top, Slider Infomation
    =============================================================*/
    var slider_wargo_top = function($) {
        $('#wrapSliderBannerTop, #wrapSliderInfomation').flexslider({
            slideshowSpeed  : 4000,
            animationSpeed  : 400,
            animation       : "slide",
            directionNav    : false,
            prevText        : "",
            nextText        : ""
        });
    };
    var timer_metaslider_wargo_top = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_wargo_top, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_wargo_top, 100) : slider_wargo_top(window.jQuery);
    };
    timer_metaslider_wargo_top();



    /*===========================================================
        Slider Ranking, Slider Arrival
    =============================================================*/
    var ranking_slider = function($) {
        $('#sliderRanking, #sliderArrival').flexslider({
            slideshowSpeed  : 4000,
            animationSpeed  : 400,
            animation       : "slide",
            itemWidth       : 125,
            itemMargin      : -1,
            controlNav      : false,
            prevText        : "",
            nextText        : "",
            minItems        : 3,
            maxItems        : 3,
            useCSS          : false
        });
    };
    var timer_metaslider_ranking = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_ranking, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_ranking, 100) : ranking_slider(window.jQuery);
    };
    timer_metaslider_ranking();
    


    /*===========================================================
        Slider Pic Control
    =============================================================*/
    var pic_control_slider = function($) {
        $('#sliderPicControl').flexslider({
            slideshowSpeed  : 4000,
            animationSpeed  : 400,
            animation       : "slide",
            itemWidth       : 125,
            itemMargin      : 0,
            prevText        : "",
            nextText        : "",
            minItems        : 1,
            maxItems        : 1,
            start: function(slider){
                $('#sliderPicControl').find(".flex-active").parent().addClass("active");
            },
            before: function(slider){
                $('#sliderPicControl').find(".flex-active").parent().siblings().removeClass("active");
            },
            after: function(slider){
                $('#sliderPicControl').find(".flex-active").parent().addClass("active");
                $('#sliderPicControl').find(".flex-active").parent().siblings().removeClass("active");
            }
        });
    };
    var timer_metaslider_pic_control = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_pic_control, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_pic_control, 100) : pic_control_slider(window.jQuery);
    };
    timer_metaslider_pic_control();



    /*===========================================================
        Header Fixed Top
    =============================================================*/
    var topHeaderHight = $('.top-header').outerHeight();
    $(window).on('scroll', function(){
        if($(this).scrollTop() > topHeaderHight){
            $('.top-header').addClass('fixed-top-header');
        }else{
            $('.top-header').removeClass('fixed-top-header');
        }
    });



    /*===========================================================
        Sidebar Menu
    =============================================================*/
    $(".icon-toggle-menu").on('click', function(){
        $('.icon-toggle-menu').toggleClass('icon-wargo-menu-toggle-open icon-wargo-menu-toggle-close');
        $(".wrap-sidebar-menu").toggleClass('active');
        $(".wraper").toggleClass('fixed-scroll');
    });



    /*===========================================================
        Togglle Sidebar Category
    =============================================================*/
    $('[data-collapse-cate]').click(function(){
        var self    = this;
        var target  = $(self).data('collapse-cate');
        var $other  = $('[data-collapse-cate="'+target+'"]');
        if(target){
            $other.each(function(index, el){
                if(el !== self){
                    $(el).siblings(target).slideUp();
                    $(el).parent().removeClass('active');
                }else{
                    $(self).siblings(target).slideToggle();
                    $(self).parent().toggleClass('active');
                }
            });
        }
    });
    
});