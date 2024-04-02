'use strict';

const tableBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rows = 4;
let columns = 4;

function updateButtons() {
  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;
  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
}

function addRows() {
  const newRow = tableBody.insertRow();

  for (let i = 0; i < columns; i++) {
    newRow.insertCell();
  }

  rows++;
  updateButtons();
}

function removeRows() {
  tableBody.deleteRow(-1);

  rows--;
  updateButtons();
}

function addColumns() {
  for (let i = 0; i < rows; i++) {
    tableBody.rows[i].insertCell();
  }

  columns++;
  updateButtons();
}

function removeColumns() {
  for (let i = 0; i < rows; i++) {
    tableBody.rows[i].deleteCell(-1);
  }

  columns--;
  updateButtons();
}

appendRow.addEventListener('click', addRows);
removeRow.addEventListener('click', removeRows);
appendColumn.addEventListener('click', addColumns);
removeColumn.addEventListener('click', removeColumns);
