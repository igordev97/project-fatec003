export default function menuMobile() {
    const btnMobile = document.querySelector('.btn-mobile');
    const headerNav = document.querySelector('.header-main-nav');

    btnMobile.addEventListener('click', () => {
        btnMobile.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
}