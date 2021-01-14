$(function() {
    //    animate({params},speed,callback);
    $(".btn-blue").click(function() {
        $(".box").animate({ top: '500px' });
    });
    $(".btn-red").click(function() {
        $(".box").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 3000, function() {
            $(".box").animate({
                top: '500px',
                opacity: '1',
                height: '100px',
                width: '100px'
            }, 2000);
        });
    });
    $(".btn-green").click(function() {
        $(".box").animate({ top: '+=100px' });
    });
    $(".btn-orange").click(function() {
        $(".box").animate({ height: 'toggle' });
    });
    $(".btn-purple").click(function() {
        var box = $(".box");
        box.animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 2000);
        box.animate({
            top: '500px',
            opacity: '1',
            height: '100px',
            width: '100px'
        }, 1500);
    });
});