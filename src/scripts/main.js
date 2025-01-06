'use strict';

const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRowButton.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow();
  const columnCount = table.rows[0]?.cells.length || 0;

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell();

    newCell.textContent = ''; // Clear cell content
  }

  addRowButton.disabled = table.rows.length === 10;
  removeRowButton.disabled = table.rows.length <= 2;
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  addRowButton.disabled = table.rows.length === 10;
  removeRowButton.disabled = table.rows.length <= 2;
});

addColumn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const newCell = row.insertCell();

    newCell.textContent = ''; // Clear cell content
  }

  addColumn.disabled = table.rows[0]?.cells.length === 10;
  removeColumn.disabled = table.rows[0]?.cells.length <= 2;
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  addColumn.disabled = table.rows[0]?.cells.length === 10;
  removeColumn.disabled = table.rows[0]?.cells.length <= 2;
});
