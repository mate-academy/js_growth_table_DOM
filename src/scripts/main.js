'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const playingField = document.querySelector('.field');

const maxRow = 10;
const minRow = 2;

appendRow.addEventListener('click', addRow);

function addRow() {
  removeRow.removeAttribute('disabled');

  const rowsBoxLength = playingField.querySelectorAll('tr').length;

  (rowsBoxLength === maxRow - 1)
    ? appendRow.setAttribute('disabled', true)
    : appendRow.removeAttribute('disabled');

  const column = playingField.rows[0].querySelectorAll('td');

  const newRow = playingField.insertRow(rowsBoxLength);

  for (let i = 0; i < column.length; i++) {
    newRow.insertAdjacentHTML('beforeend', '<td></td>');
  }
};

removeRow.addEventListener('click', removedRows);

function removedRows() {
  appendRow.removeAttribute('disabled');

  const rowsBoxLength = playingField.querySelectorAll('tr').length;

  (rowsBoxLength === minRow + 1)
    ? removeRow.setAttribute('disabled', true)
    : removeRow.removeAttribute('disabled');

  playingField.deleteRow(rowsBoxLength - 1);
};

appendColumn.addEventListener('click', addColumn);

function addColumn() {
  removeColumn.removeAttribute('disabled');

  const column = playingField.rows[0].querySelectorAll('td');

  (column.length === maxRow - 1)
    ? appendColumn.setAttribute('disabled', true)
    : appendColumn.removeAttribute('disabled');

  for (let i = 0; i < playingField.rows.length; i++) {
    playingField.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
  }
};

removeColumn.addEventListener('click', removedColumns);

function removedColumns() {
  appendColumn.removeAttribute('disabled');

  const column = playingField.rows[0].querySelectorAll('td');

  (column.length === minRow + 1)
    ? removeColumn.setAttribute('disabled', true)
    : removeColumn.removeAttribute('disabled');

  for (let i = 0; i < playingField.rows.length; i++) {
    playingField.rows[i].deleteCell(column.length - 1);
  }
};
