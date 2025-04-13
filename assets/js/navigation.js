   // Получаем блок с id='content'
   const contentBlock = document.getElementById('content');
        
   // Находим все заголовки h2 внутри этого блока
   const headers = contentBlock.querySelectorAll('h2');
   
   // Создаем навигационный список
   const navigationList = document.createElement('ul');
   navigationList.id = 'navigation-list';

   // Добавляем ссылки в навигацию
   headers.forEach(header => {
       const slug = header.textContent.replace(/\s+/g, '-').toLowerCase(); // Генерируем уникальный идентификатор

       // Добавляем id к заголовку
       header.id = slug;

       const listItem = document.createElement('li');
       const link = document.createElement('a');
       link.href = `#${slug}`; // Ссылаемся на созданный id
       link.textContent = header.textContent;
       listItem.appendChild(link);
       navigationList.appendChild(listItem);
   });

   // Добавляем навигацию в nav
   const navigation = document.getElementById('navigation');
   navigation.appendChild(navigationList);