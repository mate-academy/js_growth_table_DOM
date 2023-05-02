'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxCols = 10;
const minCols = 2;

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  if (rowsCount >= maxRows) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }

  if (rowsCount <= minRows) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (colsCount >= maxCols) {
    appendColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }

  if (colsCount <= minCols) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

appendRowButton.addEventListener('click', () => {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
    updateButtonsState();
  }
});

appendColumnButton.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }
  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtonsState();
  }
});

updateButtonsState();
