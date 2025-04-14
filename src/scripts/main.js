'use strict';

const table = document.querySelector('.field');

const { rows } = table;
const { cells: columns } = rows[0];

const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_ROWS = 2;
const MIN_COLUMNS = 2;
const MAX_ROWS = 10;
const MAX_COLUMNS = 10;

function updateButtons() {
  appendRowButton.disabled = rows.length >= MAX_ROWS;
  appendColumnButton.disabled = columns.length >= MAX_COLUMNS;
  removeRowButton.disabled = rows.length <= MIN_ROWS;
  removeColumnButton.disabled = columns.length <= MIN_COLUMNS;
}

function appendRow() {
  const newRow = table.insertRow();

  for (let i = 0; i < columns.length; i++) {
    newRow.insertCell();
  }

  updateButtons();
}

function appendColumn() {
  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell();
  }

  updateButtons();
}

function removeRow() {
  table.deleteRow(-1);
  updateButtons();
}

function removeColumn() {
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }

  updateButtons();
}

appendRowButton.addEventListener('click', () => appendRow());
appendColumnButton.addEventListener('click', () => appendColumn());
removeRowButton.addEventListener('click', () => removeRow());
removeColumnButton.addEventListener('click', () => removeColumn());
