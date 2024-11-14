'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

const maxCount = 10;
const minCount = 2;

const updateButtonStates = () => {
  appendRow.disabled = rowCount >= maxCount;
  removeRow.disabled = rowCount <= minCount;
  appendColumn.disabled = colCount >= maxCount;
  removeColumn.disabled = colCount <= minCount;
};

appendRow.addEventListener('click', () => {
  if (rowCount < maxCount) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    rowCount++;
    updateButtonStates();
  }
});

removeRow.addEventListener('click', () => {
  if (rowCount > minCount) {
    table.deleteRow(-1);
    rowCount--;
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', () => {
  if (colCount < maxCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
    colCount++;
    updateButtonStates();
  }
});

removeColumn.addEventListener('click', () => {
  if (colCount > minCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
    colCount--;
    updateButtonStates();
  }
});

updateButtonStates();
