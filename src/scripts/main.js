'use strict';

const MAX_CELLS = 10;
const MIN_CELLS = 2;

function updateButtonStates() {
  appendRowButton.disabled = tableRows.length >= MAX_CELLS;
  removeRowButton.disabled = tableRows.length <= MIN_CELLS;
  appendColumnButton.disabled = tableRows[0].cells.length >= MAX_CELLS;
  removeColumnButton.disabled = tableRows[0].cells.length <= MIN_CELLS;
}

function appendRow() {
  const rowElement = document.querySelector('.field tr');
  const newRow = rowElement.cloneNode(true);

  if (tableRows.length < MAX_CELLS) {
    tableElement.querySelector('tbody').append(newRow);
  }
}

function removeRow() {
  const lastRow = tableRows[tableRows.length - 1];

  if (tableRows.length > MIN_CELLS) {
    const parentElement = lastRow.parentNode;

    parentElement.removeChild(lastRow);
  }
}

function appendColumn() {
  if (tableRows[0].cells.length < MAX_CELLS) {
    for (let i = 0; i < tableRows.length; i++) {
      const rowCell = document.querySelector('.field td');
      const newRowCell = rowCell.cloneNode(true);

      tableRows[i].append(newRowCell);
    }
  }
}

function removeColumn() {
  if (tableElement.rows[0].cells.length > MIN_CELLS) {
    for (let i = 0; i < tableRows.length; i++) {
      tableRows[i].cells[tableRows[i].cells.length - 1].remove();
    }
  }
}

const tableElement = document.querySelector('.field');
const buttons = document.querySelectorAll('.button');
const tableRows = tableElement.rows;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

updateButtonStates(); // Initialize buttons state

[...buttons].forEach(button => {
  button.addEventListener('click', (e) => {
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

      default:
        break;
    }

    updateButtonStates();
  });
});
