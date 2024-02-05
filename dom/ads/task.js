const rotatorCases = document.querySelectorAll('.rotator__case');
let activeIndex = 0;

function rotateText() {
  rotatorCases[activeIndex].classList.remove('rotator__case_active');
  activeIndex = (activeIndex + 1) % rotatorCases.length;
  rotatorCases[activeIndex].classList.add('rotator__case_active');
}

setInterval(rotateText, 1000);