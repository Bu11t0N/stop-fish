// script.js — исправленный
console.log('script.js загружен');

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.course-card');
  console.log('Найдено карточек:', cards.length);

  cards.forEach(card => {
    // визуальная подсказка
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
      const titleEl = card.querySelector('.course-title');
      const title = titleEl ? titleEl.innerText.trim() : '';

      console.log('Клик по карточке:', title);

      // сравниваем в нижнем регистре, чтобы избежать проблем с пробелами/регистром
      const titleLower = title.toLowerCase();

      if (titleLower.includes('фишинг')) {
        console.log('Перенаправление на phishing.html');
        window.location.href = 'phishing.html';
      } else {
        alert(Раздел "${title}" пока в разработке.);
      }
    });
  });
});
