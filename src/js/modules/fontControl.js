export default function fontControl() {
    const btnMore = document.querySelector('.btn-more');
    const btnLess = document.querySelector('.btn-less');
    let count = 0;
    let bodyFontDefault = 100;

    function lessFontControl() {
        if(count > -3) {
            count -= 1;
            document.body.style.fontSize = bodyFontDefault + count + '%';
        }
    }

    function moreFontControl() {
        if(count < 4) {
            count += 1;
            document.body.style.fontSize = bodyFontDefault + count + '%';
        }
    }

    btnLess.addEventListener('click', lessFontControl);
    btnMore.addEventListener('click', moreFontControl);
}