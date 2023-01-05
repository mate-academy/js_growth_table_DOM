'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');
const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;

appendRow.addEventListener('click', addRow);

function addRow() {
  removeRow.removeAttribute('disabled');

  const boxRows = table.querySelectorAll('tr').length;

  if (boxRows === maxCount - 1) {
    appendRow.setAttribute('disabled', true);
  } else {
    appendRow.removeAttribute('disabled');
  }

  const column = table.rows[0].querySelectorAll('td');
  const newRow = table.insertRow(boxRows);

  for (let i = 0; i < column.length; i++) {
    newRow.insertAdjacentHTML('beforeend', '<td></td>');
  }
}

removeRow.addEventListener('click', removeRows);

function removeRows() {
  appendRow.removeAttribute('disabled');

  const boxRows = table.querySelectorAll('tr').length;

  if (boxRows === minCount + 1) {
    removeRow.setAttribute('disabled', true);
  } else {
    removeRow.removeAttribute('disabled');
  }

  table.deleteRow(boxRows - 1);
}

appendColumn.addEventListener('click', addColumn);

function addColumn() {
  removeColumn.removeAttribute('disabled');

  const column = table.rows[0].querySelectorAll('td');

  if (column.length === maxCount - 1) {
    appendColumn.setAttribute('disabled', true);
  } else {
    appendColumn.removeAttribute('disabled');
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
  }
}

removeColumn.addEventListener('click', removeColumns);

function removeColumns() {
  appendColumn.removeAttribute('disabled');

  const column = table.rows[0].querySelectorAll('td');

  if (column.length === minCount + 1) {
    removeColumn.setAttribute('disabled', true);
  } else {
    removeColumn.removeAttribute('disabled');
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(column.length - 1);
  }
};
