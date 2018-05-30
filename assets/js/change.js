$(document).ready(function(){

    $('aside').addClass('batman');
    //$('.batman').css({'border': '3px dashed blue'});
  
    $('article').addClass('joker');
    //$('.joker').css({'font-size': '28px'});

    $('.fade_img').hide().fadeIn(4000);
    $('.batman').hide().slideDown(4000);

    $('.down').hide().slideDown(3000);
    $('.up').hide().fadeIn(2000);
    $('.joker').hide().fadeIn(3000);
});