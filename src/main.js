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
container.addEventListener('touchend', touchEnd);

function touchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
}

function touchMove(e) {
  if (!isDragging) return;

  const diffX = e.touches[0].clientX - startX;
  if (Math.abs(diffX) > 20) { // Threshold to prevent accidental touch events
    e.preventDefault(); // Prevent default touch behavior like scrolling
  }
}

function touchEnd(e) {
  if (!isDragging) return;

  const diffX = e.changedTouches[0].clientX - startX;
  if (diffX > 20) {
    prevItem();
  } else if (diffX < -20) {
    nextItem();
  }
  isDragging = false;
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