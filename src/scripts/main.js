'use strict';

const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

function getRowCount() {
  return table.querySelectorAll('tr').length;
}

function getColumnCount() {
  const firstRow = table.querySelector('tr');

  return firstRow ? firstRow.children.length : 0;
}

function updateButtonStates() {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  appendRowButton.disabled = rowCount >= maxCount;
  removeRowButton.disabled = rowCount <= minCount;
  appendColumnButton.disabled = columnCount >= maxCount;
  removeColumnButton.disabled = columnCount <= minCount;
}

appendRowButton.addEventListener('click', () => {
  const existingRow = table.querySelector('tr');

  if (getRowCount() < maxCount) {
    const newRow = existingRow.cloneNode(true);

    table.appendChild(newRow);
    updateButtonStates();
  }
});

removeRowButton.addEventListener('click', () => {
  if (getRowCount() > minCount) {
    const lastRow = table.querySelector('tr:last-child');

    if (lastRow) {
      lastRow.remove();
      updateButtonStates();
    }
  }
});

appendColumnButton.addEventListener('click', () => {
  if (getColumnCount() < maxCount) {
    const rows = table.querySelectorAll('tr'); // Dynamically re-query rows

    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
    updateButtonStates();
  }
});

removeColumnButton.addEventListener('click', () => {
  if (getColumnCount() > minCount) {
    const rows = table.querySelectorAll('tr'); // Dynamically re-query rows

    rows.forEach((row) => {
      const lastCell = row.querySelector('td:last-child');

      if (lastCell) {
        lastCell.remove();
      }
    });
    updateButtonStates();
  }
});

updateButtonStates();
