'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MIN_COUNT = 2;
const MAX_COUNT = 10;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  addRow.disabled = rowCount >= MAX_COUNT;
  removeRow.disabled = rowCount <= MIN_COUNT;

  addCol.disabled = colCount >= MAX_COUNT;
  removeCol.disabled = colCount <= MIN_COUNT;
}

addRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount >= MAX_COUNT) {
    return;
  }

  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount <= MIN_COUNT) {
    return;
  }

  table.deleteRow(rowCount - 1);
  updateButtons();
});

addCol.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_COUNT) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1);
  }
  updateButtons();
});

removeCol.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount <= MIN_COUNT) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(colCount - 1);
  }
  updateButtons();
});

updateButtons();
