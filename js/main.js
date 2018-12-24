$('.part__slider').owlCarousel({
      nav: true,
      dots: true,
      items: 4,
      loop: false,
      margin: 20,
      navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
});
$('.cert__slider').owlCarousel({
      nav: true,
      dots: true,
      items: 4,
      loop: false,
      margin: 20,
      navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
});
//Tabs
$(document).ready(function () {
// $(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").addClass('active');
$(".main-slider .main-slider__bg-item:first-child").addClass('active');
    $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').removeClass('active').eq(numLi).addClass('active');
            thisLi.parent().parent().parent().parent().find('.main-slider__bg').children('.main-slider__bg-item').removeClass('active').eq(numLi).addClass('active');
        }
    });
});
////Табы на странице Кадастровая оценка, блок cad-profit
$('.cad-profit__item').on('click', function(){
  $('.cad-profit__bg-item').removeClass('active');
  $('.cad-profit__item').removeClass('active');
  $('.cad-profit__bg-item[data-item="'+$(this).attr('data-item')+'"]').addClass('active');
  $(this).addClass('active');
});
//Увеличение чисел
$(document).ready(function () {
    var show = true;
    var countbox = ".spincrement__wrp";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.spincrement').css('opacity', '1');
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
 
});

$('.auto-calc__slider').owlCarousel({
    nav: true,
    dots: false,
    items: 1,
    loop: false,
    margin: 20,
    mouseDrag: false,
    navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
});

//Мобильное меню
$('.header__hamburger').on('click', function() {
  $(this).toggleClass('active','slow');
  $('.header__bot-wrp').toggleClass('active');
  $('body').toggleClass('fixed');
});
if (screen.width <= 768) {
  window.onload = function(){
      $('.main-nav__link-wrp_sub .main-nav__link').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active','slow');
      });
  };
};
  
//Закрываем AjaxForm popup после успешной отправки
$(document).on('af_complete', function(event,res) {
  if(res.success) parent.$.fancybox.close();
});