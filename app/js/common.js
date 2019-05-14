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
//здесь мы прописываем опции карусели
    carouselSvc.owlCarousel({
        // loop: true,  //зацикливаем
        nav: true,
        dots: false,
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

    $('.h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    //плагин для тега select
    $('select').selectize();

    //функция для появления кнопки наверх
    $(window).scroll(function () {
       if ($(this).scrollTop() > $(this).height()) {
           $('.top').addClass('active');
       }
       else {
           $('.top').removeClass('active');
       }

    });

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

//в этой функции будет всё что связано размещением контента при изменении размеров окна
    function onResize(){
        $('.carousel-service-content').equalHeights();

    }onResize();

    window.onresize = function () {
        onResize();
    };


    var carouselReview = $('.carousel-review');
    //здесь мы прописываем опции карусели
    carouselReview.owlCarousel({
        // loop: true,  //зацикливаем
        smartSpeed: 700, //скорость
        responsiveClass: true,
        items: 1
    });

    var carouselPartners = $('.partners');
    //здесь мы прописываем опции карусели
    carouselPartners.owlCarousel({
        // loop: true,  //зацикливаем
        smartSpeed: 700, //скорость
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1
            },
            // breakpoint from 480 up
            480 : {
                items : 2
            },
            // breakpoint from 768 up
            768 : {
                items : 3
            },
            1100 : {
                items : 4
            }
        },
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
//для прелоадера
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });
});
