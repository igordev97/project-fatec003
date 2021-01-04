export default function tweenMax() {
     // HOME - HEADER 
     TweenMax.from('.header-top', 1.5, {
        delay: 0.5,
        opacity: 0,
        y: "-10",
        ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom('.header-action-items *', 1.5, {
        delay: .4,
        opacity: 0,
        y: "-40",
        ease: Expo.easeInOut,
    }, 0.08);

    TweenMax.staggerFrom('.header-main-nav *', 1.5, {
        delay: .8,
        opacity: 0,
        y: "-40",
        ease: Expo.easeInOut,
    }, 0.08);

    // HOME - TEXT
    TweenMax.from('.main-content-center h1 .text-effect', 1.5, {
        delay: 1,
        y: "130%",
        ease: Expo.easeInOut,
    }, 0.08);

    TweenMax.from('.main-content-center h2', 1.5, {
        opacity: 0,
        delay: 1.3,
        x: "120%",
    });

    TweenMax.from('.main-content-center h3 .text-effect', 1.5, {
        delay: 1.2,
        y: "110%",
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-content-center p .text-effect', 1.5, {
        delay: 1.2,
        y: "130%",
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-content-bottom h2 .text-effect', 1.5, {
        delay: 1.5,
        opacity: 0,
        y: "100%",
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-img-bg', 1.5, {
        delay: 1.5,
        opacity: 0,
        x: "-10%",
        ease: Expo.easeInOut,
    });

}