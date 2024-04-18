'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonStates() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount === 10;
  removeRowButton.disabled = rowCount === 2;

  appendColumnButton.disabled = columnCount === 10;
  removeColumnButton.disabled = columnCount === 2;
}

function addRows() {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  updateButtonStates();
}

function removeRows() {
  table.deleteRow(-1);

  updateButtonStates();
}

function addColumns() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  updateButtonStates();
}

function removeColumns() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateButtonStates();
}

appendRowButton.addEventListener('click', addRows);
removeRowButton.addEventListener('click', removeRows);
appendColumnButton.addEventListener('click', addColumns);
removeColumnButton.addEventListener('click', removeColumns);
