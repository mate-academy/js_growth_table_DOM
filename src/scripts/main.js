'use strict';

function updateButtonsState() {
  const rows = table.querySelectorAll('tr');
  const rowCount = rows.length;
  const firstRow = table.querySelector('tr');
  const columnCount = firstRow ? firstRow.children.length : 0;

  appendRow.disabled = rowCount === 10;
  appendColumn.disabled = columnCount === 10;
  removeRow.disabled = rowCount === 2;
  removeColumn.disabled = columnCount === 2;
}

const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

updateButtonsState();

appendRow.addEventListener('click', () => {
  if (appendRow.disabled) {
    return;
  }

  const row = document.createElement('tr');
  const firstRow = table.querySelector('tr');
  const quantity = firstRow.children.length;

  for (let i = 0; i < quantity; i++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  tableBody.appendChild(row);
  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  if (removeRow.disabled) {
    return;
  }

  const allRows = tableBody.querySelectorAll('tr');
  const lastRow = allRows[allRows.length - 1];

  lastRow.remove();
  updateButtonsState();
});

appendColumn.addEventListener('click', () => {
  if (appendColumn.disabled) {
    return;
  }

  const rows = tableBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  if (removeColumn.disabled) {
    return;
  }

  const allRows = tableBody.querySelectorAll('tr');

  allRows.forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtonsState();
});
