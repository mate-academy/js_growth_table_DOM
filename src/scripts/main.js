'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

function appendRow() {
  if (table.rows.length < MAX_ROWS) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }

    if (table.rows.length === MAX_ROWS) {
      appendRowButton.disabled = true;
    }
    removeRowButton.disabled = false;
  }
}

function removeRow() {
  if (table.rows.length > MIN_ROWS) {
    table.deleteRow(-1);

    if (table.rows.length === MIN_ROWS) {
      removeRowButton.disabled = true;
    }

    appendRowButton.disabled = false;
  }
}

function appendColumn() {
  if (table.rows[0].cells.length < MAX_COLUMNS) {
    const row = table.rows;

    [...row].map(r => r.insertCell());
  }

  if (table.rows[0].cells.length === MAX_COLUMNS) {
    appendColumnButton.disabled = true;
  }
  removeColumnButton.disabled = false;
}

function removeColumn() {
  if (table.rows[0].cells.length > MIN_COLUMNS) {
    const row = table.rows;

    [...row].map(r => r.deleteCell(-1));

    if (table.rows[0].cells.length === MIN_COLUMNS) {
      removeColumnButton.disabled = true;
    }

    appendColumnButton.disabled = false;
  }
}
