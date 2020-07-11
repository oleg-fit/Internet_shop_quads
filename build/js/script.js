$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="img/banner-section/icon-arrow-left.svg" alt="Предыдущий слайд"><span class="visually-hidden">Предыдущий слайд</span></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="img/banner-section/icon-arrow-right.svg" alt="Следющий слайд"><span class="visually-hidden">Следющий слайд</span></button>'
  })


  $('.search__tabs-item').on('click', function (e) {
    e.preventDefault();

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');

    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
  });




});