'use strict';

const addRowsBtn = document.querySelector('.append-row');
const removeRowsBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

addRowsBtn.addEventListener('click', addRow);
removeRowsBtn.addEventListener('click', removeRow);
addColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

const table = document.querySelector('.field');

function addRow() {
  const columnCount = table.querySelector('tr').querySelectorAll('td').length;
  const row = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const ceil = document.createElement('td');

    row.append(ceil);
  }

  table.append(row);

  checkCount();
}

function removeRow() {
  const row = table.querySelector('tr');

  row.remove();

  checkCount();
}

function addColumn() {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.append(cell);
  });

  checkCount();
}

function removeColumn() {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  checkCount();
}

function checkCount() {
  const rows = table.querySelectorAll('tr').length;
  const columns = table.querySelector('tr').querySelectorAll('td').length;

  addRowsBtn.disabled = rows >= 10;
  removeRowsBtn.disabled = rows <= 2;

  addColumnBtn.disabled = columns >= 10;
  removeColumnBtn.disabled = columns <= 2;
}
