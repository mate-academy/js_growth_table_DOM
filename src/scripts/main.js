'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtonState() {
  const rowCount = tbody.rows.length;
  const columnCount = rowCount > 0 ? tbody.rows[0].cells.length : 0;

  addColumnButton.disabled = columnCount >= 10;
  addRowButton.disabled = rowCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
  removeRowButton.disabled = rowCount <= 2;
}

function addRow() {
  const rowCount = tbody.rows.length;

  if (rowCount >= 10) {
    return;
  }

  const previousRow = rowCount > 0 ? tbody.rows[rowCount - 1] : null;
  const cellCount = previousRow ? previousRow.cells.length : 2;

  // Создаем новую строку
  const newRow = document.createElement('tr');

  for (let i = 0; i < cellCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  tbody.appendChild(newRow);

  updateButtonState();
}

function removeRow() {
  const rowCount = tbody.rows.length;

  if (rowCount > 2) {
    tbody.deleteRow(rowCount - 1);
    updateButtonState();
  }
}

function addColumn() {
  const rowCount = tbody.rows.length;

  if (rowCount > 0) {
    const columnCount = tbody.rows[0].cells.length;

    if (columnCount >= 10) {
      return;
    }

    for (let i = 0; i < rowCount; i++) {
      const newCell = document.createElement('td');

      tbody.rows[i].appendChild(newCell);
    }
  }

  updateButtonState();
}

function removeColumn() {
  const rowCount = tbody.rows.length;

  if (rowCount > 0) {
    const columnCount = tbody.rows[0].cells.length;

    if (columnCount > 2) {
      for (let i = 0; i < rowCount; i++) {
        tbody.rows[i].deleteCell(columnCount - 1);
      }
    }
  }

  updateButtonState();
}

addRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
addColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);
