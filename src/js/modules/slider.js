export default function sliderProjects() {
    const sliderImage = document.querySelectorAll('.slide-image');
        const slidesContainer = document.querySelector('.slides-container');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const navigationDots = document.querySelector('.navigation-dots');

        let numberOfImages = sliderImage.length;
        let sliderWidth = sliderImage[0].clientWidth;
        let countSlider = 0;

        // set up slider
        function init() {
            sliderImage.forEach((img, i) => {
                img.style.left = i * 100 + "%";
            });

            sliderImage[0].classList.add('active');

            createNavigationDots();
        }

        init();

        // dots
        function createNavigationDots() {
            for (let i = 0; i < numberOfImages; i++) {
                const dot = document.createElement('div');
                dot.classList.add('single-dot');
                navigationDots.appendChild(dot); // gerando o(s) dots "dentro da caixa"

                navigationDots.children[0].classList.add('active');
                dot.addEventListener('click', () => {
                    goToSlider(i);
                });
            }
        }

        // next Button
        nextBtn.addEventListener('click', () => {
            if (countSlider >= numberOfImages - 1) {
                goToSlider(0);
                return;
            }
            countSlider++;
            goToSlider(countSlider);
        });

        // Got To Slider
        prevBtn.addEventListener('click', () => {
            if (countSlider <= 0) {
                goToSlider(numberOfImages - 1);
                return;
            }
            countSlider--;
            goToSlider(countSlider);
        });

        function goToSlider(sliderNumber) {
            slidesContainer.style.transform = "translateX(-" + sliderWidth * sliderNumber + "px)";
            countSlider = sliderNumber;

            setActiveClass();
        }

        function setActiveClass() {
            // Set active class for Slider Image
            let currentActive = document.querySelector('.slide-image.active');
            currentActive.classList.remove('active');
            sliderImage[countSlider].classList.add('active');

            // Set active class for navigation dots
            let currentDot = document.querySelector('.single-dot.active');
            currentDot.classList.remove('active');
            navigationDots.children[countSlider].classList.add('active');
        }
}