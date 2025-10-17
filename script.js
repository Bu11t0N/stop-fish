document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.course-title').innerText.trim();
        const target = card.getAttribute('data-target'); // Можно использовать data-target, но пока оставим проверку по title для простоты

        // Проверяем, какая карточка нажата
        if (title === "Фишинг") {
            window.location.href = "phishing.html"; // переход на страницу фишинга
        } else {
            // ИСПРАВЛЕНИЕ: Используем обратные кавычки (`) для шаблонного литерала
            alert(Раздел "${title}" пока в разработке.);
        }
    });
});
