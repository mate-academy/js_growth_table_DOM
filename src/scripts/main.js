'use strict';

const table = document.querySelector('.field');

const buttonAddRow = document.querySelector('.append-row');
const buttonDeleteRow = document.querySelector('.remove-row');
const buttonAddColumn = document.querySelector('.append-column');
const buttonDeleteColumn = document.querySelector('.remove-column');

let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

const maxRowsColumns = 10;
const minRowColumns = 2;

const updateButtonsDisabled = () => {
  buttonAddRow.disabled = rowCount >= maxRowsColumns;
  buttonAddColumn.disabled = columnCount >= maxRowsColumns;
  buttonDeleteRow.disabled = rowCount <= minRowColumns;
  buttonDeleteColumn.disabled = columnCount <= minRowColumns;
}

buttonAddRow.addEventListener('click', () => {

  if (rowCount < maxRowsColumns) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
    rowCount++;
    updateButtonsDisabled();
  }
});

buttonDeleteRow.addEventListener('click', () => {
  if (rowCount > minRowColumns) {
    table.deleteRow(-1);
    rowCount--;
    updateButtonsDisabled();
  }
})

buttonAddColumn.addEventListener('click', () => {
  if (columnCount < maxRowsColumns) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
    columnCount++;
    updateButtonsDisabled();
  }
});

buttonDeleteColumn.addEventListener('click', () => {
  if (columnCount > minRowColumns) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
    columnCount--;
    updateButtonsDisabled();
  }
})
