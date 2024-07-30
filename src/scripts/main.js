'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rows = 4;
let columns = 4;

function updateButtons() {
  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;
}

function addRows() {
  const addRow = tbody.insertRow();

  for (let i = 2; i < columns; i++) {
    addRow.insertCell();
  }

  rows++;
  updateButtons();
}

function removeRows() {
  tbody.deleteRow(-1);

  rows--;
  updateButtons();
}

function addColumns() {
  for (let i = 0; i < rows; i++) {
    tbody.rows[i].insertCell();
  }

  columns++;
  updateButtons();
}

function removeColumns() {
  for (let i = 0; i < rows; i++) {
    tbody.rows[i].deleteCell(-1);
  }

  columns--;
  updateButtons();
}

appendRow.addEventListener('click', addRows);
removeRow.addEventListener('click', removeRows);
appendColumn.addEventListener('click', addColumns);
removeColumn.addEventListener('click', removeColumns);
