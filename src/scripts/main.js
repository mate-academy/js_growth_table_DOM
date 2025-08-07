'use strict';

// eslint-disable-next-line no-console
console.log('Script loaded');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody') || table;

function updateButtonStates() {
  const rows = table.querySelectorAll('tr');
  const rowCount = rows.length;
  const columnCount = rows[0]?.children.length || 0;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', function (addRow) {
  const columnCount = table.rows[0]?.children.length || 0;

  if (table.rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let item = 0; item <= columnCount - 1; item++) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }
  tbody.append(newRow);
  updateButtonStates();
});

removeRow.addEventListener('click', function (deleteRow) {
  const rows = table.querySelectorAll('tr');

  if (table.rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', function (addColumn) {
  const rows = table.querySelectorAll('tr');
  const firstRow = rows[0];
  const columnCount = firstRow.children.length;

  if (columnCount < 10) {
    rows.forEach((row) => {
      const td = document.createElement('td');

      row.append(td);
    });
    updateButtonStates();
  }
});

removeColumn.addEventListener('click', function (deleteColumn) {
  const rows = table.querySelectorAll('tr');
  const columnCount = table.rows[0]?.children.length || 0;

  if (columnCount > 2) {
    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
    updateButtonStates();
  }
});
