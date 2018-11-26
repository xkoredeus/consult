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
            items: 2
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
            items: 2
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

