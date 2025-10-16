document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Вы выбрали ${card.querySelector('.course-title').innerText}`);
        // Организация открытия соответствующего модуля курса
    });
});
