document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.course-title').innerText.trim();
        const targetLink = card.getAttribute('data-link'); // Проверяем, есть ли прямая ссылка для перехода
        
        if (targetLink) {
            // Если data-link есть (например, "phishing.html"), переходим по ссылке
            window.location.href = targetLink;
        } else {
            // Для всех остальных карточек выводим сообщение о разработке
            // ИСПРАВЛЕНО: Используются обратные кавычки (`) для корректного отображения переменной
            alert(Раздел "${title}" пока в разработке.);
        }
    });
});
