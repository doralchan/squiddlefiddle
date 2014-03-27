$(document).ready(function(){

    var $pot = $('#pot'),
    $body = $(document.body),
    bodyHeight = $body.height();

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $pot.width()));

        $pot.css({
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)',
            'right':position,
            'bottom':position,
        }

                );
    });
});
