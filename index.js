$(document).ready(function () {
    $('.footer').hide();
    $('.share').click(function (e) { 
        e.preventDefault();
        $('.footer').fadeToggle(500);
        $('.share').toggleClass('button-pressed');
    });
});

