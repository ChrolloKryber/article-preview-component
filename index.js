$(document).ready(function () {
    $('.footer').hide();
    $('.share').click(function (e) { 
        e.preventDefault();
        $('.footer').toggle();
    });
});