const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');
tabs.forEach((tab, i) => {
  tab.addEventListener('click', event => {
    document.querySelector('.tab_active').classList.remove('tab_active');
    event.target.classList.add('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    contents[i].classList.add('tab__content_active');
  })
});