document.addEventListener("DOMContentLoaded", () => {
    // Установить начальный размер шрифта при загрузке страницы
    setInitialFontSize();

    // Назначить обработчик изменения размера шрифта
    const fontSizeSelect = document.getElementById('font-size');
    fontSizeSelect.addEventListener('change', updateFontSize);
});

function setInitialFontSize() {
    const defaultFontSize = '18'; // Начальный размер шрифта
    applyFontSizes(defaultFontSize); // Применяем начальные стили
}

function updateFontSize() {
    const fontSize = document.getElementById('font-size').value;
    applyFontSizes(fontSize); // Применяем новые стили
}

function applyFontSizes(fontSize) {
    // Устанавливаем размер шрифта для всех элементов внутри #content
    const content = document.getElementById('content');
    if (content) {
        // Для всех <p>
        const paragraphs = content.querySelectorAll('p');
        paragraphs.forEach(p => p.style.fontSize = `${fontSize}px`);

        // Для всех <h2>
        const headingsH2 = content.querySelectorAll('h2');
        headingsH2.forEach(h2 => h2.style.fontSize = `${parseInt(fontSize) + 3}px`);

        // Для всех <h1>
        const headingsH1 = content.querySelectorAll('h1');
        headingsH1.forEach(h1 => h1.style.fontSize = `${parseInt(fontSize) + 6}px`);
    }
}