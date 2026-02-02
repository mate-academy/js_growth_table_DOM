'use strict';

// Отримуємо елементи таблиці та кнопок
const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

// Мінімальна та максимальна кількість рядків/стовпців
const MIN = 2;
const MAX = 10;

// Функція для оновлення стану кнопок (включено/вимкнено)
function updateButtons() {
  const rowCount = table.rows.length; // Поточна кількість рядків
  const colCount = table.rows[0].cells.length; // Поточна кількість стовпців

  // eslint-disable-next-line max-len
  appendRowBtn.disabled = rowCount >= MAX; // Вимикаємо кнопку додавання рядка, якщо досягнуто максимум
  // eslint-disable-next-line max-len
  removeRowBtn.disabled = rowCount <= MIN; // Вимикаємо кнопку видалення рядка, якщо досягнуто мінімум
  // eslint-disable-next-line max-len
  appendColBtn.disabled = colCount >= MAX; // Вимикаємо кнопку додавання стовпця, якщо досягнуто максимум
  // eslint-disable-next-line max-len
  removeColBtn.disabled = colCount <= MIN; // Вимикаємо кнопку видалення стовпця, якщо досягнуто мінімум
}

// Додаємо новий рядок
appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount < MAX) {
    const newRow = table.insertRow(); // Створюємо новий рядок

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell(); // Додаємо порожні клітинки
    }
    updateButtons(); // Оновлюємо стан кнопок
  }
});

// Видаляємо останній рядок
removeRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > MIN) {
    table.deleteRow(-1); // Видаляємо останній рядок
    updateButtons(); // Оновлюємо стан кнопок
  }
});

// Додаємо новий стовпець
appendColBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell(); // Додаємо нову клітинку до кожного рядка
    }
    updateButtons(); // Оновлюємо стан кнопок
  }
});

// Видаляємо останній стовпець
removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN) {
    for (const row of table.rows) {
      row.deleteCell(-1); // Видаляємо останню клітинку у кожному рядку
    }
    updateButtons(); // Оновлюємо стан кнопок
  }
});

// Ініціалізація стану кнопок при завантаженні сторінки
updateButtons();
