$(document).ready(function () {
    $('a.link').click(function (e) { 
        var href = $(this).attr('href');
        $('html,body').animate({scrollTop: $(href).offset().top},'slow');
    });
});