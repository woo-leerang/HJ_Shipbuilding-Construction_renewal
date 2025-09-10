// 스크롤 부드럽게
window.scroll({
    top: 0,
    left: 100,
    behavior: 'smooth'
});

// 토글메뉴 동작
$(document).ready(function () {
    $('.nav_menu').mouseover(function () {
        $('.toggle_menu').css('display', 'block');
        $('.nav .wrap').css('background-color', '#ffffff');
        $('.nav_wrap .left .black').css('display', 'block');
        $('.nav_wrap .left .white').css('display', 'none');
        $('.nav_wrap .middle li .top').css('color', '#424242');
        $('.nav_wrap .right li a img').css('filter', 'none');
    });
    $('.nav_menu').mouseleave(function () {
        $('.toggle_menu').css('display', 'none');
        $('.nav .wrap').css('background-color', 'rgba(255, 255, 255, 0)');
        $('.nav_wrap .left .black').css('display', 'none');
        $('.nav_wrap .left .white').css('display', 'block');
        $('.nav_wrap .middle li .top').css('color', '#ffffff');
        $('.nav_wrap .right li a img').css('filter', 'brightness(0) invert(1)');
    });
});

// 회사소개 배 사진 작아지게
const ship = gsap.timeline();
ship
    .to('.ship', {
        width: 800,
        y: 140
    });
ScrollTrigger.create({
    animation: ship,
    trigger: '.content1',
    strat: 'top top',
    end: '+=3000',
    pin: true,
    scrub: true,
    anticipatePin: 1,
    markers: false
});

$(document).ready(function () {
    var skill_li = $('.content2 .content2_wrap .intro li');
    $('.one').mouseover(function () {
        $(this).css('width', '314px');
        $('.one .intro_txt p').css('font-size', '20px');
        skill_li.not($(this)).css('width', '200px');
    });
    $('.one').mouseleave(function(){
         $('.one .intro_txt p').css('font-size', '16px')
    });

    $('.two').mouseover(function () {
        $(this).css('width', '314px');
        $('.two .intro_txt p').css('font-size', '20px');
        skill_li.not($(this)).css('width', '200px');
    });
    $('.two').mouseleave(function(){
         $('.two .intro_txt p').css('font-size', '16px')
    });
    $('.three').mouseover(function () {
        $(this).css('width', '314px');
        $('.three .intro_txt p').css('font-size', '20px');
        skill_li.not($(this)).css('width', '200px');
    });
    $('.three').mouseleave(function(){
         $('.three .intro_txt p').css('font-size', '16px')
    });
    $('.four').mouseover(function () {
        $(this).css('width', '314px');
        $('.four .intro_txt p').css('font-size', '20px');
        skill_li.not($(this)).css('width', '200px');
    });
    $('.four').mouseleave(function(){
         $('.four .intro_txt p').css('font-size', '16px')
    });
    $('.five').mouseover(function () {
        $(this).css('width', '314px');
        $('.five .intro_txt p').css('font-size', '20px');
        skill_li.not($(this)).css('width', '200px');
    });
    $('.five').mouseleave(function(){
         $('.five .intro_txt p').css('font-size', '16px')
    });
});

// 지속가능경영 제목 따라오게
const esg = gsap.timeline();
esg
    .to('.content3_wrap .title', {
    });
ScrollTrigger.create({
    animation: esg,
    trigger: '.content3_wrap .title',
    strat: '+=100',
    end:'bottom 90%',
    pin: true,
    scrub: true,
    anticipatePin: 1,
    markers: false
});
