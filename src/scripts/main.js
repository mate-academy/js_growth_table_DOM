'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

function addColumn() {
  const table = document.querySelector('.field').querySelector('tbody');
  const rows = table.rows;

  [...rows].forEach((elem) => {
    elem.insertCell(-1);
  });

  removeColumnButton.disabled = false;

  const countColumn = table.querySelector('tr').children.length;

  if (countColumn === MAX_COUNT) {
    addColumnButton.disabled = true;
  }
}

function removeColumn() {
  const table = document.querySelector('.field').querySelector('tbody');
  const rows = table.rows;

  [...rows].forEach((elem) => elem.deleteCell(-1));

  addColumnButton.disabled = false;

  const countColumn = table.querySelector('tr').children.length;

  if (countColumn === MIN_COUNT) {
    removeColumnButton.disabled = true;
  }
}

function addRow() {
  const table = document.querySelector('.field').querySelector('tbody');
  const celsInRows = table.querySelector('tr').children.length;
  const tr = document.createElement('tr');

  for (let i = 1; i <= celsInRows; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.append(tr);

  removeRowButton.disabled = false;

  const countRow = table.rows.length;

  if (countRow === MAX_COUNT) {
    addRowButton.disabled = true;
  }
}

function removeRow() {
  const table = document.querySelector('.field').querySelector('tbody');

  table.deleteRow(-1);

  addRowButton.disabled = false;

  const countRow = table.rows.length;

  if (countRow === MIN_COUNT) {
    removeRowButton.disabled = true;
  }
}

addColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);
addRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
