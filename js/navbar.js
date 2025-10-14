document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list .nav-default');

    if (navLinks.length > 0) {
        navLinks[0].classList.add('nav-default-active');
        navLinks[0].classList.remove('nav-default');

        navLinks.forEach(clickedLink => {
            clickedLink.addEventListener('click', function () {

                navLinks.forEach(link => {
                    link.classList.remove('nav-default-active');
                    link.classList.add('nav-default');
                });
                this.classList.add('nav-default-active');
                this.classList.remove('nav-default');
            });
        });
    }
});