'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function appendColumn() {
  if (table.rows[0].cells.length < MAX_COUNT) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = table.rows[i].insertCell();

      newCell.textContent = '';
    }
    updateButtons();
  }
}

function removeColumn() {
  if (table.rows[0].cells.length > MIN_COUNT) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtons();
  }
}

function appendRow() {
  if (table.rows.length < MAX_COUNT) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = newRow.insertCell();

      newCell.textContent = '';
    }

    updateButtons();
  }
}

function removeRow() {
  if (table.rows.length > MIN_COUNT) {
    table.deleteRow(-1);
    updateButtons();
  }
}

function updateButtons() {
  const numRows = table.rows.length;
  const numCols = table.rows[0].cells.length;

  appendRowButton.disabled = numRows >= MAX_COUNT;
  removeRowButton.disabled = numRows <= MIN_COUNT;
  appendColumnButton.disabled = numCols >= MAX_COUNT;
  removeColumnButton.disabled = numCols <= MIN_COUNT;
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtons();
