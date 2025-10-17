document.querySelectorAll('.course-card').forEach(card => {
    // Добавляем обработчик события 'click'
    card.addEventListener('click', (event) => {
        
        // 1. Получаем ссылку для перехода из атрибута data-link
        const targetLink = card.getAttribute('data-link'); 
        
        // 2. Получаем заголовок для сообщения (на случай, если ссылки нет)
        const titleElement = card.querySelector('.course-title');
        const title = titleElement ? titleElement.innerText.trim() : 'Этот раздел';

        if (targetLink) {
            // Если атрибут data-link найден, выполняем переход
            window.location.href = targetLink;
        } else {
            // Если data-link не найден, выводим сообщение о разработке
            // Используется шаблонный литерал с обратными кавычками (`)
            alert(Раздел "${title}" пока в разработке.);
        }
    });
});
