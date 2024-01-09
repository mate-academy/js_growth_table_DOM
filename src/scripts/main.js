'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

function updateButtonStates() {
  if (rowCount === 2) {
    removeRow.disabled = true;
  } else if (rowCount === 10) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
    appendRow.disabled = false;
  }

  if (colCount === 2) {
    removeColumn.disabled = true;
  } else if (colCount === 10) {
    appendColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
    appendColumn.disabled = false;
  }
}

function handleAppendRow() {
  if (rowCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    rowCount++;
    updateButtonStates();
  }
}

function handleDeleteRow() {
  if (rowCount > 2) {
    table.deleteRow(-1);
    rowCount--;
    updateButtonStates();
  }
}

function handleAppendColumn() {
  if (colCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
    colCount++;
    updateButtonStates();
  }
}

function handleDeleteColumn() {
  if (colCount > 2) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
    colCount--;
    updateButtonStates();
  }
}

appendRow.addEventListener('click', handleAppendRow);
removeRow.addEventListener('click', handleDeleteRow);
appendColumn.addEventListener('click', handleAppendColumn);
removeColumn.addEventListener('click', handleDeleteColumn);
updateButtonStates();
