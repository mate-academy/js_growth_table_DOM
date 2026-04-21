'use strict';

// 1. Знаходимо всі необхідні елементи 🔎
const field = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

/**
 * Функція створення нового рядка.
 * Вона автоматично підлаштовується під кількість стовпчиків у таблиці.
 */
function createRow() {
  const newRow = document.createElement('tr');
  // Рахуємо клітинки в першому рядку як зразок
  // Зайди в таблицю, візьми перший рядок,
  // порахуй у ньому кількість клітинок і дай мені це число
  // Якщо рядки є — беремо довжину першого, якщо ні — 0
  const currentColumnsCount =
    field.rows.length > 0 ? field.rows[0].cells.length : 0;

  // Цикл створює потрібну кількість клітинок (td)
  for (let i = 0; i < currentColumnsCount; i++) {
    // Створюємо клітинку (Table Data)
    const td = document.createElement('td');

    // Кладемо клітинку всередину нашого нового рядка
    newRow.appendChild(td);
  }

  // Повертаємо готовий рядок з усіма клітинками всередині
  return newRow;
}

/**
 * Функція контролю лімітів (2-10).
 * Керує станом кнопок (disabled), щоб користувач не вийшов за межі.
 */
function checkLimits() {
  const rowCount = field.rows.length;

  // Додаємо захист: якщо рядків немає, вважаємо, що колонок 0
  // Якщо рядки є, беремо кількість клітинок з першого рядка
  const colCount = rowCount > 0 ? field.rows[0].cells.length : 0;

  // Блокування кнопок для рядків
  addRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;

  // Блокування кнопок для колонок
  addColumnBtn.disabled = colCount >= 10;
  removeColumnBtn.disabled = colCount <= 2;
}

// --- ОБРОБНИКИ ПОДІЙ С ЗАХИСНИМИ ПЕРЕВІРКАМИ ---

// Додавання рядка
addRowBtn.addEventListener('click', () => {
  if (field.rows.length < 10) {
    // Перевірка ліміту перед дією
    const newRow = createRow();

    field.tBodies[0].append(newRow);
    checkLimits(); // Оновлюємо стан кнопок
  }
});

// Видалення рядка
removeRowBtn.addEventListener('click', () => {
  if (field.rows.length > 2) {
    field.deleteRow(-1);
    checkLimits();
  }
});

addColumnBtn.addEventListener('click', () => {
  // Визначаємо поточну кількість колонок безпечно
  const currentCols = field.rows.length > 0 ? field.rows[0].cells.length : 0;

  if (currentCols < 10) {
    // Використовуємо звичайний цикл для перебору всіх рядків таблиці
    for (let i = 0; i < field.rows.length; i++) {
      /*
       * Створюємо нову клітинку td.
       * Це потрібно робити всередині циклу, щоб кожен рядок
       * отримав свій власний унікальний елемент.
       */
      const td = document.createElement('td');

      // Додаємо клітинку в кінець поточного рядка (i-го за рахунком)
      field.rows[i].appendChild(td);
    }
    checkLimits(); // Оновлюємо стан кнопок після змін
  }
});

// Обробник для кнопки видалення колонки ➖📊
removeColumnBtn.addEventListener('click', () => {
  // Перевіряємо безпечно

  const currentCols = field.rows.length > 0 ? field.rows[0].cells.length : 0;
  // Перевіряємо, чи кількість клітинок у першому рядку більша за 2

  if (currentCols > 2) {
    // Цикл проходить по кожному рядку таблиці від 0 до останнього
    for (let i = 0; i < field.rows.length; i++) {
      // 1. field.rows[i] — звертаємося до поточного рядка за індексом i
      // 2. .lastElementChild — знаходимо в цьому рядку останню клітинку <td>)
      // 3. .remove() — видаляємо знайдений елемент із DOM-дерева
      field.rows[i].lastElementChild.remove();
    }

    // Після того, як видалили клітинку в кожному рядку, оновлюємо стан кнопок
    checkLimits();
  }
});

// Ініціалізація: перевіряємо ліміти відразу при завантаженні сторінки
checkLimits();
