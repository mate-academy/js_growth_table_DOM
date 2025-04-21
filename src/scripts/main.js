'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

function buttonStatus() {
  appendRow.disabled = rowCount >= MAX_COUNT;
  removeRow.disabled = rowCount <= MIN_COUNT;
  appendCol.disabled = colCount >= MAX_COUNT;
  removeCol.disabled = colCount <= MIN_COUNT;
}

appendRow.addEventListener('click', () => {
  if (rowCount < MAX_COUNT) {
    const row = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      row.insertCell();
    }

    rowCount++;
    buttonStatus();
  }
});

removeRow.addEventListener('click', () => {
  if (rowCount > MIN_COUNT) {
    table.deleteRow(-1);
    rowCount--;
    buttonStatus();
  }
});

appendCol.addEventListener('click', () => {
  if (colCount < MAX_COUNT) {
    for (const row of table.rows) {
      row.insertCell();
    }

    colCount++;
    buttonStatus();
  }
});

removeCol.addEventListener('click', () => {
  if (colCount > MIN_COUNT) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }

    colCount--;
    buttonStatus();
  }
});
