'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('table');

function updateButtons() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  removeRowButton.disabled = rows <= 2;
  appendRowButton.disabled = rows >= 10;

  removeColumnButton.disabled = columns <= 2;
  appendColumnButton.disabled = columns >= 10;
}

function appendRow() {
  const newRow = table.insertRow();
  const columns = table.rows[0].cells.length;

  for (let i = 0; i < columns; i++) {
    newRow.insertCell();
  }

  updateButtons();
}

function removeRow() {
  table.deleteRow(table.rows.length - 1);
  updateButtons();
}

function appendColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }
  updateButtons();
}

function removeColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(table.rows[i].cells.length - 1);
  }
  updateButtons();
}

updateButtons();

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
