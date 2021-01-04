export default function toggleThemeDark() {
    const btnContrast = document.querySelector('.btn-contrast');

    btnContrast.addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
}
