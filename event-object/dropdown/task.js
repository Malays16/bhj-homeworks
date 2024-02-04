const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = list.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
});
items.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    value.textContent = item.textContent.trim();
    list.classList.remove('dropdown__list_active');
  });
});