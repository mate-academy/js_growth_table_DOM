'use strict';

const rowMin = 2;
const rowMax = 10;
const colMin = 2;
const colMax = 10;
const table = document.querySelector('.field');
const buttonAddCol = document.querySelector('.append-column');
const buttonRemoveCol = document.querySelector('.remove-column');
const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');

function addCol() {
  const colsInitial = table.querySelector('tr')
    .querySelectorAll('td').length;

  if (colsInitial >= colMax) {
    return;
  }

  for (const tr of table.querySelectorAll('tr')) {
    const td = document.createElement('td');

    tr.append(td);
  }
}

function removeCol() {
  const colsInitial = table.querySelector('tr')
    .querySelectorAll('td').length;

  if (colsInitial <= colMin) {
    return;
  }

  for (const tr of table.querySelectorAll('tr')) {
    const td = tr.lastElementChild;

    td.remove();
  }
}

function addRow() {
  const rowsInitial = table.querySelectorAll('tr').length;

  if (rowsInitial >= rowMax) {
    return;
  }

  const tbody = table.querySelector('tbody');
  const tr = table.querySelector('tr').cloneNode(true);

  tbody.append(tr);
}

function removeRow() {
  const rowsInitial = table.querySelectorAll('tr').length;

  if (rowsInitial <= rowMin) {
    return;
  }

  const tbody = table.querySelector('tbody');
  const tr = tbody.lastElementChild;

  tr.remove();
}

buttonAddCol.addEventListener('click', addCol);
buttonRemoveCol.addEventListener('click', removeCol);
buttonAddRow.addEventListener('click', addRow);
buttonRemoveRow.addEventListener('click', removeRow);
