window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.header__hamburger'),
    navigationMenu = document.querySelector('.header__navigation'),
    formButton = document.querySelector('.button_feedback'),
    close = document.querySelector('.modal-thanks__close'),
    modal = document.querySelector('.modal-thanks'),
    backgroundMain = document.querySelector('.background-img_main'),
    backgroundFeedback = document.querySelector('.background-img_feedback');

    function modalOpen(e) {
        e.preventDefault()
        modal.classList.add('modal-thanks_active');
        document.body.style.overflow = 'hidden';
    };
        
    function modalClose() {
        modal.classList.remove('modal-thanks_active');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
        navigationMenu.classList.toggle('header__navigation_active');
        hamburger.classList.toggle('header__hamburger_active');
    });

    formButton.addEventListener('click', modalOpen);

    close.addEventListener('click', modalClose);

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modalClose();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal-thanks_active')) {
            modalClose();
        };
    });

    window.addEventListener('scroll', () => {
        let offset = document.documentElement.scrollTop,
            feedbackOffset = document.querySelector('.feedback').offsetTop - window.innerHeight;
        backgroundMain.style.transform = `translateY(${offset * 0.8}px)`;
        if (offset > feedbackOffset) {
            backgroundFeedback.style.transform = `translateY(${(offset-feedbackOffset) * 0.7}px)`;
        }
    });

});
