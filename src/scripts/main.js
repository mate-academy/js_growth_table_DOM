'use strict';

// write code here
const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function updateButtonState() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= max;
  removeRow.disabled = rowCount <= min;
  appendColumn.disabled = columnCount >= max;
  removeColumn.disabled = columnCount <= min;
}

appendRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount < max) {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }

    updateButtonState();
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > min) {
    table.deleteRow(-1);
    updateButtonState();
  }
});

appendColumn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount < max) {
    for (const row of table.rows) {
      row.insertCell();
    }

    updateButtonState();
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > min) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtonState();
  }
});
