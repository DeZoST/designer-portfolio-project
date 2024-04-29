const buttons = document.querySelectorAll('.arrow__btn');
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector(".projects__carousel");
const container = document.querySelector(".projects__carousel-container");

let currentItemIndex = 0;

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));