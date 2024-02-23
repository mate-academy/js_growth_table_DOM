'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
let rowCount = field.rows.length;
let columnCount = field.rows[0].cells.length;

function updateBtn() {
  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (rowCount < 10) {
    const newRow = field.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell(i);
    }
    rowCount++;
  }

  updateBtn();
});

removeRow.addEventListener('click', () => {
  if (rowCount > 1) {
    field.deleteRow(-1);
    rowCount--;
  }

  updateBtn();
});

appendColumn.addEventListener('click', () => {
  if (columnCount < 10) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].insertCell();
    }

    columnCount++;
  }
  updateBtn();
});

removeColumn.addEventListener('click', () => {
  if (columnCount > 1) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].deleteCell(-1);
    }
    columnCount--;
  }
  updateBtn();
});
