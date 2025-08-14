'use strict';

// Отримуємо елементи з HTML
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const buttons = document.querySelectorAll('.button');
const field = document.querySelector('.field');

// Рахуємо кількість рядків та стовпців
let rowCount = getRowCount();
let columnCount = getColumnCount();

function getRowCount() {
  return document.querySelectorAll('tr').length;
}

function getColumnCount() {
  return document.querySelectorAll('tr')[0].querySelectorAll('td').length;
}

// Функція для перевірки кількості елементів
function checkMaxElements() {
  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

checkMaxElements();

// Функція для актуалізації лічильників і перевірки
function updateCounts() {
  rowCount = getRowCount();
  columnCount = getColumnCount();
  checkMaxElements();
}

// Функції для додавання рядків
function createNewRow() {
  if (rowCount >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }
  field.appendChild(newRow);
  updateCounts();
}

// Функції для додавання стовпців
function createNewColumn() {
  if (columnCount >= 10) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  updateCounts();
}

// Функції для видалення рядків
function deleteRow() {
  if (rowCount <= 2) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  rows[rows.length - 1].remove();
  updateCounts();
}

// Функції для видалення стовпців
function deleteColumn() {
  if (columnCount <= 2) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');

    row.removeChild(cells[cells.length - 1]);
  });
  updateCounts();
}

// Додаємо обробники подій для кнопок
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.className) {
      case 'append-row button':
        createNewRow();
        break;
      case 'remove-row button':
        deleteRow();
        break;
      case 'append-column button':
        createNewColumn();
        break;
      case 'remove-column button':
        deleteColumn();
        break;
    }
  });
});
