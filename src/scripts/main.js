'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

// let totalRows = table.rows.length;
// let columns = table.rows[0].cells.length;

function updateButtonStates() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (rowCount === 10) {
    appendRowButton.disabled = true;
  } else if (rowCount === 2) {
    removeRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
    removeRowButton.disabled = false;
  }

  if (columnCount === 10) {
    appendColumnButton.disabled = true;
  } else if (columnCount === 2) {
    removeColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
    removeColumnButton.disabled = false;
  }
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
