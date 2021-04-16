// select the elements

const slides = document.getElementsByClassName('slider-item');
const allSlides = slides.length;
const bntNext = document.querySelector('#next');
const bntPrev = document.querySelector('#prev');
let slidePosition = 0;

// functions

const updateSlide = function () {
    for (let slide of slides) {
        slide.classList.remove('item-visible');
        slide.classList.add('item-hidden');
    }
    slides[slidePosition].classList.add('item-visible')
}

const nextSlide = function () {
    if (slidePosition === allSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }
    updateSlide();
}

const prevSlide = function () {
    if (slidePosition === 0) {
        slidePosition = allSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlide();
}

//events

bntNext.addEventListener('click', () => {
    nextSlide();
})

bntPrev.addEventListener('click', () => {
    prevSlide();
})