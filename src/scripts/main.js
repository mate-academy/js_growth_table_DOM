'use strict';

// ---------------- ОБ'ЄКТ З ВСІМА КНОПКАМИ ----------------
const tableButtons = {
  appendRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),
  appendColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
};

// ---------------- Сама Таблиця ----------------
const table = document.querySelector('.field');

// ---------------- ФУНКЦІЯ  DISABLED ----------------
function updateButtonsState() {
  const MIN_SIZE = 2;
  const MAX_SIZE = 10;

  const rows = table.querySelectorAll('tr');
  const rowCount = rows.length;

  const columnCount = rows[0] ? rows[0].children.length : 0;

  // ----- ROWS -----
  tableButtons.removeRow.disabled = rowCount <= MIN_SIZE;
  tableButtons.appendRow.disabled = rowCount >= MAX_SIZE;

  // ----- COLUMNS -----
  tableButtons.removeColumn.disabled = columnCount <= MIN_SIZE;
  tableButtons.appendColumn.disabled = columnCount >= MAX_SIZE;
}

// ---------------- ДОДАЮ КОЛОНКУ ----------------
tableButtons.appendColumn.addEventListener('click', () => {
  const columns = document.querySelectorAll('tr');

  columns.forEach((column) => {
    const td = document.createElement('td');

    column.appendChild(td);
  });

  updateButtonsState();
});

// ---------------- ВИДАЛЯЮ КОЛОНКУ ----------------
tableButtons.removeColumn.addEventListener('click', () => {
  const columns = document.querySelectorAll('tr');

  columns.forEach((column) => {
    if (column.lastElementChild) {
      column.removeChild(column.lastElementChild);
    }
  });

  updateButtonsState();
});

// ----------------  ДОДАЮ РЯДОК ----------------
tableButtons.appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');
   // тут шукаю перший рядок таблиці
   // якщо таблиця НЕ порожня → firstRow = <tr>;
   // якщо таблиця порожня → firstRow = null;  
  const firstRow = table.querySelector('tr');

  const columnCount = firstRow ? firstRow.children.length : 0;

  // ДОДАЄМО СТІЛЬКИ Ж TD
  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

    table.appendChild(newRow);

    updateButtonsState();
});

// ---------------- ВИДАЛЯЮ РЯДОК ----------------
tableButtons.removeRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  };

  updateButtonsState();
});
