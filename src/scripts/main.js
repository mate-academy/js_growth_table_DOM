'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

// Функція для перевірки стану кнопок
function updateButtonStates() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  // Додаємо або видаляємо атрибут disabled для кнопок
  removeRowButton.disabled = rows <= 2;
  removeColumnButton.disabled = columns <= 2;

  appendRowButton.disabled = rows >= 10;
  appendColumnButton.disabled = columns >= 10;
}

// Функція для додавання рядка
function addRow() {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  updateButtonStates();
}

// Функція для видалення рядка
function removeRow() {
  if (table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
    updateButtonStates();
  }
}

// Функція для додавання стовпця
function addColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }
  updateButtonStates();
}

// Функція для видалення стовпця
function removeColumn() {
  if (table.rows[0].cells.length > 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(table.rows[i].cells.length - 1);
    }
    updateButtonStates();
  }
}

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtonStates();
