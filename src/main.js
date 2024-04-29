const buttons = document.querySelectorAll('.arrow__btn');
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector(".projects__carousel");
const slideWidth = 286;


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let carouselOffset = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(slideWidth);
        const calcNextSlide = event.target.id === "next" ? 1 : -1;
        const slideActive = document.querySelector('.active');
        let newIndex = calcNextSlide + [...slides].indexOf(slideActive);
        
        carouselOffset += -calcNextSlide * slideWidth;
        carousel.style.transform = `translateX(${carouselOffset}px)`;

        // Vérifiez si l'index est en dehors des limites et ajustez-le si nécessaire
        if (newIndex < 0) {
            newIndex = slides.length - 1;
            carouselOffset = -slideWidth * 2;
            carousel.style.transform = `translateX(${carouselOffset}px)`;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
            carouselOffset = 0;
            carouselOffset = slideWidth * 2;
            carousel.style.transform = `translateX(${carouselOffset}px)`;
        }
        
        slides[newIndex].classList.add('active');
        slideActive.classList.remove('active');
    });
});

