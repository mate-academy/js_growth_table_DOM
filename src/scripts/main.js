'use strict';

const DISABLED_COLUMN_ADD = 9;
const DISABLED_COLUMN_REMOVE = 3;

const tableBody = document.getElementsByTagName('tbody')[0];
const addRowButton = document.getElementsByClassName('append-row')[0];
const removeRow = document.getElementsByClassName('remove-row')[0];
const addColumn = document.getElementsByClassName('append-column')[0];
const removeColumn = document.getElementsByClassName('remove-column')[0];

addRowButton.addEventListener('click', () => {
  const lastRow = tableBody.rows[tableBody.rows.length - 1];

  const clonedRow = lastRow.cloneNode(true);

  tableBody.appendChild(clonedRow);

  if (tableBody.rows.length === 10) {
    return addRowButton.setAttribute('disabled', '');
  }

  return removeRow.removeAttribute('disabled');
});

removeRow.addEventListener('click', () => {
  const lastRow = tableBody.rows[tableBody.rows.length - 1];

  tableBody.removeChild(lastRow);

  if (tableBody.rows.length === 2) {
    return removeRow.setAttribute('disabled', '');
  }

  return addRowButton.removeAttribute('disabled');
});

addColumn.addEventListener('click', () => {
  const firsRows = tableBody.rows[0];
  const tdOfFirstRows = firsRows.querySelectorAll('td');

  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];

    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  if (tdOfFirstRows.length === DISABLED_COLUMN_ADD) {
    return addColumn.setAttribute('disabled', '');
  }

  removeColumn.removeAttribute('disabled');
});

removeColumn.addEventListener('click', () => {
  const firsRows = tableBody.rows[0];
  const tdOfFirstRows = firsRows.querySelectorAll('td');

  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];

    const td = row.querySelectorAll('td');

    row.removeChild(td[td.length - 1]);
  }

  if (tdOfFirstRows.length === DISABLED_COLUMN_REMOVE) {
    return removeColumn.setAttribute('disabled', '');
  }

  addColumn.removeAttribute('disabled');
});
