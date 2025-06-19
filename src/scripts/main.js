'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function getColumnCount() {
  const firstRow = table.querySelector('tr');

  return firstRow ? firstRow.children.length : 0;
}

function getRowCount() {
  return table.querySelectorAll('tr').length;
}

function updateButtonStates() {
  const rows = getRowCount();
  const cols = getColumnCount();

  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;

  appendColumn.disabled = cols >= 10;
  removeColumn.disabled = cols <= 2;
}

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const cols = getColumnCount();

  for (let i = 0; i < cols; i++) {
    const cell = document.createElement('td');

    newRow.appendChild(cell);
  }

  table.appendChild(newRow);
  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.parentElement.removeChild(lastRow);
  }
  updateButtonStates();
});

appendColumn.addEventListener('click', () => {
  const cols = getColumnCount();

  if (cols < 10) {
    Array.from(table.rows).forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
  }
  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  const cols = getColumnCount();

  if (cols > 2) {
    Array.from(table.rows).forEach((row) => {
      row.removeChild(row.cells[cols - 1]);
    });
  }
  updateButtonStates();
});

updateButtonStates();
