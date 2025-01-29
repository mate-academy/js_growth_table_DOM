'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const maxCount = 10;
const minCount = 2;

function updateButton() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0]?.cells.length || 0;

  addRow.disabled = rowCount >= maxCount;
  deleteRow.disabled = rowCount <= minCount;
  addColumn.disabled = columnCount >= maxCount;
  deleteColumn.disabled = columnCount <= minCount;
}

addRow.addEventListener('click', () => {
  if (table.rows.length < maxCount) {
    const newRow = table.insertRow();
    const columnCount = table.rows[0]?.cells.length || minCount;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
  }

  updateButton();
});

deleteRow.addEventListener('click', () => {
  if (table.rows.length > minCount) {
    table.deleteRow(-1);
  }

  updateButton();
});

addColumn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length < maxCount) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  updateButton();
});

deleteColumn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length > minCount) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  updateButton();
});

updateButton();
