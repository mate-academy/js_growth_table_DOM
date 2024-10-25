'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const minRows = 2;
const maxRows = 10;
const minCols = 2;
const maxCols = 10;
let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

function appendRow() {
  if (rowCount < maxRows) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    rowCount++;
    updateButtons();
  }
}

function removeRow() {
  if (rowCount > minRows) {
    table.deleteRow(-1);
    rowCount--;
    updateButtons();
  }
}

function appendColumn() {
  if (colCount < maxCols) {
    for (const row of table.rows) {
      row.insertCell();
    }
    colCount++;
    updateButtons();
  }
}

function removeColumn() {
  if (colCount > minCols) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    colCount--;
    updateButtons();
  }
}

function updateButtons() {
  appendRowBtn.disabled = rowCount >= maxRows;
  removeRowBtn.disabled = rowCount <= minRows;
  appendColBtn.disabled = colCount >= maxCols;
  removeColBtn.disabled = colCount <= minCols;
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColBtn.addEventListener('click', appendColumn);
removeColBtn.addEventListener('click', removeColumn);

window.onload = function () {
  updateButtons();
};
