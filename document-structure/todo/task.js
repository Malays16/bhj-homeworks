// Получаем элементы
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

// Функция добавления задачи
function addTask() {
  const taskTitle = taskInput.value.trim();
  if (taskTitle !== '') {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
      <div class="task__title">${taskTitle}</div>
      <a href="#" class="task__remove">&times;</a>
    `;
    tasksList.appendChild(task);
    taskInput.value = '';

    // Добавляем обработчик на кнопку удаления задачи
    const removeBtn = task.querySelector('.task__remove');
    removeBtn.addEventListener('click', removeTask);
  }
}

// Функция удаления задачи
function removeTask(event) {
  event.preventDefault();
  const taskToRemove = event.target.closest('.task');
  taskToRemove.remove();
}

// Обработчик добавления задачи по нажатию Enter
tasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTask();
});

// Обработчик добавления задачи по клику на кнопку "Добавить"
const addBtn = document.getElementById('tasks__add');
addBtn.addEventListener('click', addTask);

// Обработчик удаления задачи
const removeBtns = document.querySelectorAll('.task__remove');
removeBtns.forEach(btn => {
  btn.addEventListener('click', removeTask);
});