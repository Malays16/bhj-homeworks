var dropdowns = document.querySelectorAll('.dropdown');

// Обходим все найденные кнопки-выпадающие списки
dropdowns.forEach(function(dropdown) {
    // Находим в каждой кнопке значение и список
    var value = dropdown.querySelector('.dropdown__value');
    var list = dropdown.querySelector('.dropdown__list');

    // Добавляем обработчик события клика по значению кнопки
    value.addEventListener('click', function() {
        // Сворачиваем/разворачиваем список при клике на значение кнопки
        list.classList.toggle('dropdown__list_active');
    });

    // Добавляем обработчик события клика по пунктам меню
    var items = list.querySelectorAll('.dropdown__item');
    items.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Предотвращаем переход по ссылке при клике на пункт меню
            event.preventDefault();
            // Меняем значение кнопки на выбранное значение пункта меню
            value.textContent = item.textContent.trim();
            // Скрываем список после выбора значения
            list.classList.remove('dropdown__list_active');
        });
    });
});