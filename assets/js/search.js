document.getElementById('search-input').addEventListener('input', function () {
    const searchQuery = this.value.trim().toLowerCase(); // Получаем значение поиска и приводим к нижнему регистру
    const titles = document.querySelectorAll('#buttons-grid #title'); // Находим все элементы с id="title"

    titles.forEach(title => {
        const titleText = title.textContent.toLowerCase(); // Получаем текст заголовка и приводим к нижнему регистру
        const litContainer = title.closest('.lit'); // Находим родительский контейнер .lit

        if (titleText.includes(searchQuery)) {
            litContainer.style.display = 'block'; // Показываем элемент, если текст заголовка содержит поисковый запрос
        } else {
            litContainer.style.display = 'none'; // Скрываем элемент, если текст заголовка не содержит поисковый запрос
        }
    });
});