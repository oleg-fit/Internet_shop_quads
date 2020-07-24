$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="img/banner-section/icon-arrow-left.svg" alt="Предыдущий слайд"><span class="visually-hidden">Предыдущий слайд</span></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="img/banner-section/icon-arrow-right.svg" alt="Следющий слайд"><span class="visually-hidden">Следющий слайд</span></button>'
  })

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-list__slider-btn product-list__slider-btn--prev"><img src="img/product-slider/icon-arrow-black-left.svg" alt="Предыдущий слайд"><span class="visually-hidden">Предыдущий слайд</span></button>',
    nextArrow: '<button class="product-list__slider-btn product-list__slider-btn--next"><img src="img/product-slider/icon-arrow-black-right.svg" alt="Следющий слайд"><span class="visually-hidden">Следющий слайд</span></button>'
  })

  $('.search__tabs-item').on('click', function (e) {
    e.preventDefault();

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');

    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
  });

  $('.tabs__box-item').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tabs__box-item--active');
    $($(this).parent().siblings().find('.tabs__content-item')).removeClass('tabs__content-item--active');

    $(this).addClass('tabs__box-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.product-list__item-favorite').on('click', function () {
    $(this).toggleClass('product-list__item-favorite--active');
  });

});