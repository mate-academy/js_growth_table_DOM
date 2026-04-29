'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxSize = 10;
const minSize = 2;

function UpdateButtons() {
  const rowCount = table.querySelector('tbody').rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= maxSize;
  removeRowButton.disabled = rowCount <= minSize;
  appendColumnButton.disabled = columnCount >= maxSize;
  removeColumnButton.disabled = columnCount <= minSize;
}

appendRowButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (table.rows.length < maxSize) {
    const tableBody = table.querySelector('tbody');
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
  }

  UpdateButtons();
});

removeRowButton.addEventListener('click', () => {
  const tableBody = table.querySelector('tbody');

  if (table.rows.length > minSize) {
    tableBody.deleteRow(-1);
  }
  UpdateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount < maxSize) {
    for (const row of table.rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }
  }
  UpdateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount > minSize) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  UpdateButtons();
});

UpdateButtons();
