export default function typewriter() {
    function effectText(element) {
        const splitText = element.innerHTML.split('');
        element.innerHTML = '';
        
        splitText.forEach((letter, i) => {
            setTimeout(() => element.innerHTML += letter, 85 * i);
        });
        
    }
    const logo = document.querySelector('.header-main-logo');
    effectText(logo);
}
