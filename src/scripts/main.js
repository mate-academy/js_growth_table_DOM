'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

function updateButtonStates() {
  const rowAmount = table.rows.length;
  const columnAmount = table.rows[0].cells.length;

  addRow.disabled = rowAmount >= maxCount;
  removeRow.disabled = rowAmount <= minCount;
  addColumn.disabled = columnAmount >= maxCount;
  removeColumn.disabled = columnAmount <= minCount;
}

addRow.addEventListener('click', () => {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }

  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > minCount) {
    table.deleteRow(-1);
    updateButtonStates();
  }
});

addColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < maxCount) {
    [...table.rows].forEach((row) => {
      row.insertCell();
    });
  }

  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > minCount) {
    [...table.rows].forEach((row) => {
      row.deleteCell(-1);
    });
  }

  updateButtonStates();
});

updateButtonStates();
