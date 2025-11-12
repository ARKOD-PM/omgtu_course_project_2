document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollToTop');

    if (!scrollButton) {
        console.error('Элемент с id="scrollToTop" не найден в DOM.');
        return;
    }

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
