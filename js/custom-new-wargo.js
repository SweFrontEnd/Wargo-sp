$(document).ready(function() {
    
    /*  range slider */
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
    

    /* List view and Grid view show */
    $('.des-text-info').hide();
    $("[data-view]").click(function() {
        var target = $(this).data("view");
        $(this).find('.icon').toggleClass('icon-wargo-grid-view icon-wargo-list-view');
        $(target).find('li').toggleClass('list-view-item list-view-item-filter');

        $('#sliderPicControl').data('flexslider').resize();
        $('#sliderPicControl').data('flexslider').resize();

        if($(target).find('li').hasClass('list-view-item-filter')){
            $('.des-text-info').show();
        }else{
            $('.des-text-info').hide();
        }
    });


    /* Begin: slider top banner */
    var slider_wargo_top = function($) {
        $('#wrapSliderBannerTop, #wrapSliderInfomation').flexslider({
            slideshowSpeed:3000,
            animationSpeed:400,
            animation:"slide",
            controlNav:true,
            directionNav:false,
            pauseOnHover:true,
            direction:"horizontal",
            reverse:false,
            prevText:"",
            nextText:"",
            easing:"linear",
            slideshow:true,
            useCSS:false,
            initDelay:2000
        });
    };
    var timer_metaslider_wargo_top = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_wargo_top, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_wargo_top, 100) : slider_wargo_top(window.jQuery);
    };
    timer_metaslider_wargo_top();
    /* End: slider top banner */

    /* Begin: slider ranking */
    var itemWidthRanking        = 123;
    var itemMarginWidthRanking  = 0;
    var minItemsRanking         = 3;
    var maxItemsRanking         = 3;
    if(typeof mobile === 'number' && mobile === 1) {
        minItemsRanking = 3;
        maxItemsRanking = 3;
    }

    var ranking_slider = function($) {
        $('#sliderRanking, #sliderArrival').flexslider({
            slideshowSpeed:6000,
            animationSpeed:400,
            animation:"slide",
            itemWidth: itemWidthRanking,
            itemMargin: itemMarginWidthRanking,
            controlNav:false,
            directionNav:true,
            pauseOnHover:false,
            direction:"horizontal",
            reverse:false,
            prevText:" ",
            nextText:" ",
            easing:"linear",
            slideshow:true,
            useCSS:false,
            minItems:minItemsRanking,
            maxItems:maxItemsRanking,
            start: function(slider){
                var $item = $(slider).find('.grid-view-item');
                $item.css('width', $item.width()+2);
            }
        });
    };
    var timer_metaslider_ranking = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_ranking, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_ranking, 100) : ranking_slider(window.jQuery);
    };
    timer_metaslider_ranking();
    /* End: slider ranking */

    /* Begin: slider pic control */
    var itemWidthPicControl        = 124;
    var itemMarginWidthPicControl  = 0;
    var minItemsPicControl         = 1;
    var maxItemsPicControl         = 1;
    if(typeof mobile === 'number' && mobile === 1) {
        minItemsPicControl = 1;
        maxItemsPicControl = 1;
    }

    var pic_control_slider = function($) {
        $('#sliderPicControl').flexslider({
            slideshowSpeed:6000,
            animationSpeed:400,
            animation:"slide",
            itemWidth: itemWidthPicControl,
            itemMargin: itemMarginWidthPicControl,
            controlNav:true,
            directionNav:true,
            pauseOnHover:false,
            direction:"horizontal",
            reverse:false,
            prevText:" ",
            nextText:" ",
            easing:"linear",
            slideshow:true,
            useCSS:false,
            minItems:minItemsPicControl,
            maxItems:maxItemsPicControl
        });
    };
    var timer_metaslider_pic_control = function() {
        !window.jQuery ? window.setTimeout(timer_metaslider_pic_control, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_pic_control, 100) : pic_control_slider(window.jQuery);
    };
    timer_metaslider_pic_control();
    /* End: slider pic control */

    /* Begin: Fixed Top Header */
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.top-header').addClass('fixed-top-header');
        }else{
            $('.top-header').removeClass('fixed-top-header');
        }
    });
    /* End: Fixed Top Header */

    /* Begin: Sidebar Menu */
    $(".icon-toggle-menu").on('click', function(){
        $('.icon-toggle-menu').toggleClass('icon-wargo-menu-toggle-open icon-wargo-menu-toggle-close');
        $(".wrap-sidebar-menu").toggleClass('active');
        $(".wraper").toggleClass('fixed-scroll');
    });
    /* End: Sidebar Menu */

    /* Begin: Togglle sidebar Category */
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
    /* End: Togglle sidebar Category */
    
});