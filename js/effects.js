$(document).ready(function(){

    var $pot = $('#pot'),
    $body = $(document.body),
    bodyHeight = $body.height();


    $('#pot').css({'marginTop': $(window).height()-$(pot).height()/3});



    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $pot.width()));

        $pot.css({
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 500) + 'deg)',
            'right':position,
            'bottom':position,
        }

                );
    });
});
