$(document).ready(function(){
    $('.reviews__carousel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>'
    });

    //Modal
    $('[data-modal=consultation-form]').on('click', function() {
        $('.overlay, #modal-consultation').fadeIn('slow');
    });
    $('.modal__close, .modal-thanks__close').on('click', function() {
        $('.overlay, #modal-consultation, #thanks').fadeOut('slow');
    });
    
    //Validate
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('.consultation form');
    validateForms('.questions form');
    validateForms('#modal-consultation form');

    //Mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu');
    const menuItem = document.querySelectorAll('.header__menu-item');
    const hamburger = document.querySelector('.header__humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__humburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__humburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})