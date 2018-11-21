$('.rev__cnt').owlCarousel({
      nav: true,
      dots: false,
      items: 3,
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
            items: 2
        },
        768 : {
            items: 3
        }
      }
});

//Tabs
$(document).ready(function () {
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
    $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
    });
});