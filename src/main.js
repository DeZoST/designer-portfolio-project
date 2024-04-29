const buttons = document.querySelectorAll('.arrow__btn');
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector(".projects__carousel");
const container = document.querySelector(".projects__carousel-container");

let currentItemIndex = 0;
let startX = 0;

function scrollToCurrentItem() {
  slides[currentItemIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

scrollToCurrentItem();

function nextItem() {
  if (currentItemIndex < slides.length - 1) {
    currentItemIndex++;
    console.log(currentItemIndex);
    scrollToCurrentItem();
  } else{
    currentItemIndex = 0;
    scrollToCurrentItem();
  }
}

function prevItem() {
  if (currentItemIndex > 0) {
    currentItemIndex--;
    console.log(currentItemIndex);
    scrollToCurrentItem();
  } else{
    currentItemIndex = slides.length - 1;
    scrollToCurrentItem();
  }
}

document.getElementById('next').addEventListener('click', nextItem);
document.getElementById('prev').addEventListener('click', prevItem);
container.addEventListener('touchstart', touchStart);
container.addEventListener('touchmove', touchMove);

function touchStart(e) {
  startX = e.touches[0].clientX;
}

function touchMove(e) {
  const diffX = e.touches[0].clientX - startX;
  if (diffX > 0) {
    prevItem();
  } else if (diffX < 0) {
    nextItem();
  }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));