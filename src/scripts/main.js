'use strict';

const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const maxCount = 10;
const minCount = 2;

let rowCount = field.rows.length;
let colCount = field.rows[0].cells.length;

function checkButton() {
  appendRow.disabled = rowCount >= maxCount;
  removeRow.disabled = rowCount <= minCount;
  appendCol.disabled = colCount >= maxCount;
  removeCol.disabled = colCount <= minCount;
}

appendRow.addEventListener('click', () => {
  if (rowCount < maxCount) {
    const row = field.insertRow();

    for (let i = 0; i < colCount; i++) {
      row.insertCell();
    }

    rowCount++;
    checkButton();
  }
});

removeRow.addEventListener('click', () => {
  if (rowCount > minCount) {
    field.deleteRow(-1);
    rowCount--;
    checkButton();
  }
});

appendCol.addEventListener('click', () => {
  if (colCount < maxCount) {
    for (const row of field.rows) {
      row.insertCell();
    }
    colCount++;
    checkButton();
  }
});

removeCol.addEventListener('click', () => {
  if (colCount > minCount) {
    for (const row of field.rows) {
      row.deleteCell(-1);
    }

    colCount--;
    checkButton();
  }
});
