'use strict';

const container = document.querySelector('.container');
const fieldTable = document.querySelector('.field');
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
  if (fieldTable.rows.length < MAX_ROWS) {
    const newRow = fieldTable.insertRow();

    addCellToRow(newRow);

    if (fieldTable.rows.length === MAX_ROWS) {
      appendRowButton.disabled = true;
    }
    removeRowButton.disabled = false;
  }
}

function removeRow() {
  if (fieldTable.rows.length > MIN_ROWS) {
    fieldTable.deleteRow(-1);

    if (fieldTable.rows.length === MIN_ROWS) {
      removeRowButton.disabled = true;
    }
    appendRowButton.disabled = false;
  }
}

function appendColumn() {
  if (fieldTable.rows[0].cells.length < MAX_COLUMNS) {
    const rows = fieldTable.rows;

    [...rows].forEach(row => addCellToRow(row));
  }

  if (fieldTable.rows[0].cells.length === MAX_COLUMNS) {
    appendColumnButton.disabled = true;
  }
  removeColumnButton.disabled = false;
}

function removeColumn() {
  if (fieldTable.rows[0].cells.length > MIN_COLUMNS) {
    const rows = fieldTable.rows;

    [...rows].forEach(row => row.deleteCell(-1));

    if (fieldTable.rows[0].cells.length === MIN_COLUMNS) {
      removeColumnButton.disabled = true;
    }
    appendColumnButton.disabled = false;
  }
}

function addCellToRow(row) {
  const newCell = row.insertCell();

  newCell.textContent = '';
}

container.addEventListener('click', (e) => {
  switch (true) {
    case e.target.classList.contains('append-row'):
      appendRow();
      break;
    case e.target.classList.contains('remove-row'):
      removeRow();
      break;
    case e.target.classList.contains('append-column'):
      appendColumn();
      break;
    case e.target.classList.contains('remove-column'):
      removeColumn();
      break;
  }
});
