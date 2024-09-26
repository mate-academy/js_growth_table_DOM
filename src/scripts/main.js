'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const table = document.querySelector('.field');
const appendCol = document.querySelector('.append-column');
const appendRow = document.querySelector('.append-row');
const removeCol = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');

const rows = table.rows;
let rowsLength = rows.length;
let colsLength = rows[0].cells.length;

function updateRowsCount(count) {
  for (let i = 0; i < Math.max(count, rowsLength); i++) {
    if (count < rowsLength && i >= count) {
      rows[i].remove();
    } else if (count > rowsLength && i >= count - 1) {
      const newRow = table.insertRow();

      for (let c = 0; c < colsLength; c++) {
        newRow.insertCell();
      }
    }
  }

  rowsLength = rows.length;

  updateDisabledState();
}

function updateColsCount(count) {
  for (const row of rows) {
    for (let i = 0; i < Math.max(count, colsLength); i++) {
      if (count < colsLength && i >= count) {
        row.cells[i].remove();
      } else if (count > colsLength && i >= count - 1) {
        row.insertCell();
      }
    }
  }

  colsLength = rows[0].cells.length;

  updateDisabledState();
}

function updateDisabledState() {
  appendCol.disabled = colsLength >= MAX_COUNT;
  removeCol.disabled = colsLength <= MIN_COUNT;
  appendRow.disabled = rowsLength >= MAX_COUNT;
  removeRow.disabled = rowsLength <= MIN_COUNT;
}

appendRow.addEventListener('click', () => updateRowsCount(rowsLength + 1));
removeRow.addEventListener('click', () => updateRowsCount(rowsLength - 1));
appendCol.addEventListener('click', () => updateColsCount(colsLength + 1));
removeCol.addEventListener('click', () => updateColsCount(colsLength - 1));
