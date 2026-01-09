'use strict';

const buttons = document.querySelector('.container');
const field = document.querySelector('.field');
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAppend = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');

let rowCount = 4;
let columnCount = 4;

buttons.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  if (eventClick.target.classList.contains('append-row')) {
    if (rowCount < 10) {
      const newRow = field.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }

      rowCount++;
    }
  }

  if (eventClick.target.classList.contains('remove-row')) {
    if (rowCount > 2) {
      field.deleteRow(-1);
      rowCount--;
    }
  }

  if (eventClick.target.classList.contains('append-column')) {
    if (columnCount < 10) {
      for (let i = 0; i < rowCount; i++) {
        field.rows[i].insertCell();
      }

      columnCount++;
    }
  }

  if (eventClick.target.classList.contains('remove-column')) {
    if (columnCount > 2) {
      for (let i = 0; i < rowCount; i++) {
        field.rows[i].deleteCell(-1);
      }

      columnCount--;
    }
  }

  updateButtons();
});

function updateButtons() {
  rowAppend.disabled = rowCount >= 10;
  columnAppend.disabled = columnCount >= 10;
  rowRemove.disabled = rowCount <= 2;
  columnRemove.disabled = columnCount <= 2;
}
