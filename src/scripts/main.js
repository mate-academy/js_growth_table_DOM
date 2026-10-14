'use strict';

const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtonsState() {
  const rowCount = table.rows.length;
  const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

  addRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;

  addColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
}

addRowButton.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  updateButtonsState();
});

addColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(table.rows[i].cells.length - 1);
  }

  updateButtonsState();
});

updateButtonsState();
