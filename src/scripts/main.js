'use strict';

const field = document.querySelector('.field');
const rows = [...document.querySelectorAll('tr')];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxRowAndCols = 10;
const minRowsAndCols = 2;

function updateButtonStates() {
  const currentColumnCount = rows[0].children.length;
  const currentRowCount = rows.length;

  appendColumn.disabled = currentColumnCount >= maxRowAndCols;
  removeColumn.disabled = currentColumnCount <= minRowsAndCols;
  appendRow.disabled = currentRowCount >= maxRowAndCols;
  removeRow.disabled = currentRowCount <= minRowsAndCols;
}

appendColumn.addEventListener('click', () => {
  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  rows.forEach((row) => {
    row.lastElementChild.remove();
  });
  updateButtonStates();
});

appendRow.addEventListener('click', () => {
  const columnCount = rows[0].children.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  field.appendChild(newRow);
  rows.push(newRow);

  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  field.deleteRow(-1);
  rows.pop();
  updateButtonStates();
});
