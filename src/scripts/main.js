'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const maxRowCount = 10;
const minRowCount = 2;
const maxColumnCount = 10;
const minColumnCount = 2;

let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

updateButtonStates();

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

function appendRow() {
  if (rowCount < maxRowCount) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell(i);
    }
    rowCount++;
    updateButtonStates();
  }
}

function removeRow() {
  if (rowCount > minRowCount) {
    table.deleteRow(-1);
    rowCount--;
    updateButtonStates();
  }
}

function appendColumn() {
  if (columnCount > minRowCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell(-1);
    }
    columnCount++;
    updateButtonStates();
  }
}

function removeColumn() {
  if (columnCount > minColumnCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
    columnCount--;
    updateButtonStates();
  }
}

function updateButtonStates() {
  appendRowBtn.disabled = rowCount >= maxRowCount;
  removeRowBtn.disabled = rowCount <= minRowCount;
  appendColumnBtn.disabled = columnCount >= maxColumnCount;
  removeColumnBtn.disabled = columnCount < minColumnCount;
}
