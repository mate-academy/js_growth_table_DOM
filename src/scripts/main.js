'use strict';

const container = document.querySelector('.container');
const tBody = document.querySelector('.field tbody');
const btnAddRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAddColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const updateButtonState = (e, direction) => {
  const buttons = container.querySelectorAll(`button[class*='${direction}']`);
  const anotherBtn = [...buttons].find((btn) => btn !== e.target);

  const count = getCount(direction);

  if (count <= MIN_COUNT || count >= MAX_COUNT) {
    e.target.setAttribute('disabled', '');

    return;
  }

  anotherBtn.removeAttribute('disabled');
};

const getCount = (direction) => {
  return direction === 'row'
    ? tBody.querySelectorAll('tr').length
    : tBody.querySelectorAll('tr:first-child td').length;
};

const addRow = (e) => {
  const newRow = tBody.insertRow();
  const cells = tBody.querySelectorAll('tbody tr:first-child td');

  for (let i = 0; i < cells.length; i++) {
    newRow.insertCell();
  }
  updateButtonState(e, 'row');
};

const removeRow = (e) => {
  const lastRow = tBody.querySelector('tr:last-child');

  if (lastRow) {
    lastRow.remove();
  }

  updateButtonState(e, 'row');
};

const addColumn = (e) => {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.append(cell);
  });

  updateButtonState(e, 'column');
};

const removeColumn = (e) => {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = row.querySelector('td:last-child');

    if (cell) {
      cell.remove();
    }
  });

  updateButtonState(e, 'column');
};

btnAddRow.addEventListener('click', addRow);
btnRemoveRow.addEventListener('click', removeRow);
btnAddColumn.addEventListener('click', addColumn);
btnRemoveColumn.addEventListener('click', removeColumn);
