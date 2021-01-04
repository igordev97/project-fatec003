export default function animationScroll() {
    const sections = document.querySelectorAll('.section-animation');
    const halfWindow = window.innerHeight * 0.6;
    
    function activeSection() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - halfWindow) < 0;

            if(isSectionVisible && !section.classList.contains('active')) {
                section.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activeSection);
}