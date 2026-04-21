'use strict';

const field = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

/**
 * Допоміжна функція для заповнення рядка клітинками.
 * Вона гарантує, що в рядку буде мінімум 2 колонки.
 */
function fillRowWithCells(row) {
  // Визначаємо кількість колонок: беремо з першого рядка або ставимо 0

  let currentColumnsCount =
    field.rows.length > 0 ? field.rows[0].cells.length : 0;

  // Ментор просив гарантувати мінімум 2 колонки при створенні рядка
  if (currentColumnsCount < 2) {
    currentColumnsCount = 2;
  }

  // Використовуємо row.insertCell(-1) для безпечного додавання td
  for (let i = 0; i < currentColumnsCount; i++) {
    row.insertCell(-1);
  }
}

/**
 * Функція контролю лімітів (2-10).
 */
function checkLimits() {
  const rowCount = field.rows.length;
  const colCount = rowCount > 0 ? field.rows[0].cells.length : 0;

  addRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  addColumnBtn.disabled = colCount >= 10;
  removeColumnBtn.disabled = colCount <= 2;
}

/**
 * Ініціалізація таблиці (2x2).
 * Ментор зауважив, що таблиця має відразу відповідати мінімуму.
 */
function initTable() {
  // Поки рядків менше 2 — додаємо їх
  while (field.rows.length < 2) {
    const newRow = field.insertRow(-1);

    fillRowWithCells(newRow);
  }

  // Перевіряємо колонки: якщо в першому рядку менше 2 — додаємо в кожен рядок
  while (field.rows[0].cells.length < 2) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].insertCell(-1);
    }
  }
  checkLimits();
}
// --- ОБРОБНИКИ ПОДІЙ ---

addRowBtn.addEventListener('click', () => {
  if (field.rows.length < 10) {
    // Використовуємо insertRow(-1) замість tBodies[0].append
    // Це автоматично створює tbody, якщо його немає
    const newRow = field.insertRow(-1);

    fillRowWithCells(newRow);
    checkLimits();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (field.rows.length > 2) {
    field.deleteRow(-1);
    checkLimits();
  }
});

addColumnBtn.addEventListener('click', () => {
  const currentCols = field.rows.length > 0 ? field.rows[0].cells.length : 0;

  if (currentCols < 10) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].insertCell(-1);
    }
    checkLimits();
  }
});

removeColumnBtn.addEventListener('click', () => {
  const currentCols = field.rows.length > 0 ? field.rows[0].cells.length : 0;

  if (currentCols > 2) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].deleteCell(-1);
    }
    checkLimits();
  }
});

// Запускаємо ініціалізацію при завантаженні
initTable();
