document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('#main-menu');

    if (hamburgerButton && navList) {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('is-active');
            navList.classList.toggle('is-active');
        });
    }
});

