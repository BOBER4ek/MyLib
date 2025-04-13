document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки для выбора шрифта
    const buttons = document.querySelectorAll('.font-select button');

    // Добавляем обработчик события клика на каждую кнопку
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFontClass = this.getAttribute('data-font'); // Получаем класс выбранного шрифта
            
            // Применяем выбранный шрифт ко всем элементам h1, h2, p
            document.querySelectorAll('h1, h2, p').forEach(el => {
                el.classList.remove('font-nunito', 'font-garamond', 'font-manrope'); // Убираем предыдущие классы шрифтов
                el.classList.add(`font-${selectedFontClass}`); // Добавляем новый класс шрифта
            });
        });
    });
});