const fontSizeControls = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');
function changeFontSize(event) {
  event.preventDefault();
  const selectedSize = event.target.dataset.size;
  for (const control of fontSizeControls) {
    control.classList.remove('font-size_active');
  }
    event.target.classList.add('font-size_active');
    if (selectedSize === 'small') {
    bookElement.classList.remove('book_fs-big');
    bookElement.classList.add('book_fs-small');
  } else if (selectedSize === 'big') {
    bookElement.classList.remove('book_fs-small');
    bookElement.classList.add('book_fs-big');
  } else {
    bookElement.classList.remove('book_fs-small');
    bookElement.classList.remove('book_fs-big');
  }
}

for (const control of fontSizeControls) {
  control.addEventListener('click', changeFontSize);
}
