'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAX_SIZE;
  removeRowButton.disabled = rowCount <= MIN_SIZE;

  appendColumnButton.disabled = columnCount >= MAX_SIZE;
  removeColumnButton.disabled = columnCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount >= MAX_SIZE) {
    return;
  }

  const columnCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= MIN_SIZE) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount >= MAX_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount <= MIN_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  updateButtons();
});

updateButtons();
