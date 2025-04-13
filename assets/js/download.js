        // Функция для автоматической обработки ссылок
        function processLinks() {
            const litBlocks = document.querySelectorAll('.lit'); // Находим все блоки с классом lit

            litBlocks.forEach(block => {
                const links = block.querySelectorAll('a'); // Находим все ссылки внутри блока

                links.forEach(link => {
                    const extension = link.href.split('.').pop().toLowerCase(); // Определяем расширение файла

                    if (extension === 'txt') {
                        link.removeAttribute('target'); // Удаляем атрибут target="_blank"
                        link.addEventListener('click', (event) => {
                            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
                            window.open(link.href, '_blank'); // Открываем файл в новой вкладке
                        });
                    }
                });
            });
        }

        // Вызываем функцию после полной загрузки страницы
        window.onload = processLinks;