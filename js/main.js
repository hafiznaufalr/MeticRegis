window.onload = function() {
  $('#loader').fadeOut()
};

setImg();
$('.nav-search').click(function(event) {
  $('.search-wrapper').slideDown(500);
});
$('.search-wrapper .close').click(function(event) {
  $(this).parents('.search-wrapper').slideUp(500);
});

$(document).ready(function() {
  parallax();
  changeHeader();
});

$(window).scroll(function(event) {
  parallax();
  changeHeader();
});

$(window).resize(function(event) {
  var vw = window.innerWidth;
  var scroll = $(window).scrollTop();
  var offset = $('.intro-content').offset().top - $('.intro-content .title').height();
  if (vw >= 768) {
    $('#navbarMenu').show(0);
    if (scroll <= offset) {
      defaultHeader();
    }
  } else {
    if ( $('.nav-toggle').attr("data-toggle") == 'collapsed' ) {
      $('#navbarMenu').show(0);
      scrolledHeader();
    } else {
      $('#navbarMenu').hide(0);
    }
  }
  // console.log(vw);
});

$('.nav-toggle').click(function(event) {
  var target = $(this).attr('data-target');
  $(''+target).slideToggle();
  if ( $(this).attr("data-toggle") == 'collapse' ) {
    $(this).attr('data-toggle', 'collapsed');
    $(this).find('.icon-bar').addClass('clicked');
  } else {
    $(this).attr('data-toggle', 'collapse');
    $(this).find('.icon-bar').removeClass('clicked');
  }
  changeHeader();
});

function parallax() {
  var scroll = $(window).scrollTop();
  $('.intro').css('background-position', 'center '+ (scroll * 0.65) +'px');
}

function setImg() {
  $('.image').each(function(index, el) {
    var source = $(this).attr('data-source');
    $(this).css('background', 'url("'+ source +'")');
  });
}

function changeHeader() {
  var scroll = $(window).scrollTop();
  var offset = $('.intro-content').offset().top - $('.intro-content .title').height();
    var vw = window.innerWidth;
  if (scroll > offset) {
    scrolledHeader();
  } else {
    if ( $('.nav-toggle').attr("data-toggle") == 'collapse' ) {
      defaultHeader();
    } else {
      scrolledHeader();
      if (vw >= 768) {
        defaultHeader();
      }
    }
  }
}

function scrolledHeader() {
  $('header').addClass('below-shadow');
  $('header, .nav-menu .link, .nav-menu li').addClass('inverse');
  $('header .nav-toggle').css('border-color', '#e8242f');
  $('header .nav-toggle .icon-bar').removeClass('icon-white').addClass('icon-inverse');
  $('.nav-brand img').attr('src', 'images/mts.png').css('width', '80px');
}

function defaultHeader() {
  $('header').removeClass('below-shadow');
  $('header, .nav-menu .link, .nav-menu li').removeClass('inverse');
  $('header .nav-toggle').css('border-color', '#e8242f');
  $('header .nav-toggle .icon-bar').removeClass('icon-inverse').addClass('icon-white');
  $('.nav-brand img').attr('src', 'images/mts.png').css('width', '100px');
}

function scrollDown(e) {
  var headerH = parseInt($('header').height()) + parseInt($('header').css('padding')) - 7;
  $('body, html').stop().animate({
    scrollTop: $( $(e).attr('data-target') ).offset().top - headerH
  }, 1000);
  // console.log( headerH + " " + $('.intro').innerHeight());
}
