'use strict';

const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const maxCell = 10;
const minCell = 2;

function appendRow() {
  if (table.rows.length < maxCell) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
    updateButtons();
  }
}

function removeRow() {
  if (table.rows.length > minCell) {
    table.deleteRow(-1);
    updateButtons();
  }
}

function appendColumn() {
  if (table.rows[0].cells.length < maxCell) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
    updateButtons();
  }
}

function removeColumn() {
  if (table.rows[0].cells.length > minCell) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtons();
  }
}

function updateButtons() {
  appRow.disabled = table.rows.length >= maxCell;
  remRow.disabled = table.rows.length <= minCell;
  appColumn.disabled = table.rows[0].cells.length >= maxCell;
  remColumn.disabled = table.rows[0].cells.length <= minCell;
}

appRow.addEventListener('click', appendRow);
remRow.addEventListener('click', removeRow);
appColumn.addEventListener('click', appendColumn);
remColumn.addEventListener('click', removeColumn);
