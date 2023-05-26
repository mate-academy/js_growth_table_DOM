'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;

function updateButtonStatus() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount === maxCount;
  removeRowButton.disabled = rowCount === minCount;
  appendColumnButton.disabled = columnCount === maxCount;
  removeColumnButton.disabled = columnCount === minCount;
}

appendRowButton.addEventListener('click', () => {
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonStatus();
});

removeRowButton.addEventListener('click', () => {
  table.deleteRow(-1);
  updateButtonStatus();
});

appendColumnButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  for (let i = 0; i < rowCount; i++) {
    table.rows[i].insertCell();
  }

  updateButtonStatus();
});

removeColumnButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  for (let i = 0; i < rowCount; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateButtonStatus();
});

updateButtonStatus();
