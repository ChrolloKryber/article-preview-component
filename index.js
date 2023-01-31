$(document).ready(function () {
    $('.footer').hide();
    $('.share').click(function (e) { 
        e.preventDefault();
        $('.footer').toggle();
        $('.profile-p').toggle();
        $('.avatar').toggle();
    });
});