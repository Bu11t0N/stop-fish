document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.course-title').innerText.trim();

        // Проверяем, какая карточка нажата
        if (title === "Фишинг") {
            window.location.href = "phishing.html"; // переход на страницу фишинга
        } else {
            alert(Раздел "${title}" пока в разработке.);
        }
    });
});
