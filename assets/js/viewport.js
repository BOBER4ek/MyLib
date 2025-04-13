// Логика для открытия/закрытия меню
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const closeButton = document.querySelector('.close-button');

settingsButton.addEventListener('click', () => {
    settingsMenu.classList.toggle('visible');
});

closeButton.addEventListener('click', () => {
    settingsMenu.classList.remove('visible');
});

// Логика для изменения шрифта
const fontButtons = document.querySelectorAll('.font-buttons button');
fontButtons.forEach(button => {
    button.addEventListener('click', () => {
        const font = button.getAttribute('data-font');
        document.body.style.fontFamily = font;
    });
});

// Логика для изменения размера шрифта
const fontSizeSelect = document.getElementById('font-size');
fontSizeSelect.addEventListener('change', () => {
    const fontSize = fontSizeSelect.value;
    document.body.style.fontSize = `${fontSize}px`;
});