'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

function updatedButtons() {
  const rowsCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendCol.disabled = colCount >= 10;
  removeCol.disabled = colCount <= 2;
}

function addRow() {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }

  updatedButtons();
}

function deleteRow() {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  updatedButtons();
}

function addCol() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  updatedButtons();
}

function deleteCol() {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  }

  updatedButtons();
}

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendCol.addEventListener('click', addCol);
removeCol.addEventListener('click', deleteCol);

updatedButtons();
