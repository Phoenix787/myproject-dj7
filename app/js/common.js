$(function() {
    var mymenu = $('#my-menu');
    mymenu.mmenu({
        extensions: ['widescreen',
                    'theme-dark',
                    'fx-menu-slide',
                    'position-right',
                    "border-offset",
                    'pagedim-black'],
        navbar: {
            title: '<img src="../img/logo-1.svg" alt="Салон красоты Смитер">'
        },
        language: 'ru'
    });

	var api = mymenu.data("mmenu");
	var menuBtn = $('header .hamburger');
	api.bind('open:finish', function () {
       menuBtn.addClass('is-active');
    });
	api.bind('close:finish', function () {
        menuBtn.removeClass('is-active');
    });

	// $('.carousel-service').ready(function () {
    //     $('.owl-carousel').owlCarousel();
    // });

    // эта функия для определения высоты блока с прайсом услуг в карусели, чтобы задать такую же высоту для блока с
// картинкой в этой карусели.
    function carouselService(){
        $('.carousel-service-item').each(function () {
            var ths = $(this),
                thisHeight = ths.find('.carousel-service-content').outerHeight();
            ths.find('.carousel-service-image').css('min-height', thisHeight);

        });
    }carouselService();



    var carouselSvc = $('.carousel-service');
    // нужно для того чтобы функция carouselService(); вычисляла значение высоты когда полностью будет сформирована
    // карусель
    carouselSvc.on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        });
    });

    carouselSvc.owlCarousel({
        // loop: true,  //зацикливаем
        nav: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        smartSpeed: 700, //скорость
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });


    //функция для выделения последнего слова в заголовке, чтобы в админке не пришлось руками выделять в заголовке
    // слово тэгами span
    $('.carousel-service-composition .h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });


    $('.carousel-service-content').equalHeights();




});
