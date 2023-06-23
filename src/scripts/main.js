'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;
const rows = table.rows;

function updateButtonStatus() {
  const rowCount = rows.length;
  const columnCount = rows[0].cells.length;

  appendRow.disabled = rowCount === maxCount;
  removeRow.disabled = rowCount === minCount;
  appendColumn.disabled = columnCount === maxCount;
  removeColumn.disabled = columnCount === minCount;
}

appendRow.addEventListener('click', () => {
  const newRow = table.insertRow();
  const columnCount = rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonStatus();
});

removeRow.addEventListener('click', () => {
  table.deleteRow(-1);
  updateButtonStatus();
});

appendColumn.addEventListener('click', () => {
  const rowCount = rows.length;

  for (let i = 0; i < rowCount; i++) {
    rows[i].insertCell();
  }

  updateButtonStatus();
});

removeColumn.addEventListener('click', () => {
  const rowCount = rows.length;

  for (let i = 0; i < rowCount; i++) {
    rows[i].deleteCell(-1);
  }

  updateButtonStatus();
});

updateButtonStatus();
