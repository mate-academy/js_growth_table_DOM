'use strict';

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function getTable() {
  return document.querySelector('.field');
}

function getCount() {
  const table = getTable();
  const rows = table.querySelectorAll('tr').length;
  const firstRow = table.querySelector('tr');
  const columns = firstRow ? firstRow.querySelectorAll('td').length : 0;

  return { rows, columns };
}

function updateButtons() {
  const { rows, columns } = getCount();

  addRowButton.disabled = rows >= 10;
  removeRowButton.disabled = rows <= 2;
  addColumnButton.disabled = columns >= 10;
  removeColumnButton.disabled = columns <= 2;
}

function addRow() {
  const table = getTable();
  const { columns } = getCount();
  const tr = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    const td = document.createElement('td');

    td.textContent = '';
    tr.appendChild(td);
  }
  table.appendChild(tr);
  updateButtons();
}

function removeRow() {
  const table = getTable();
  const rows = table.querySelectorAll('tr');

  if (rows.length > 0) {
    table.deleteRow(table.rows.length - 1);
  }
  updateButtons();
}

function addColumn() {
  const table = getTable();
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });
  updateButtons();
}

function removeColumn() {
  const table = getTable();
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td, th');

    if (cells.length > 0) {
      row.removeChild(cells[cells.length - 1]);
    }
    updateButtons();
  });
}

addRowButton.addEventListener('click', addRow);
addColumnButton.addEventListener('click', addColumn);
removeRowButton.addEventListener('click', removeRow);
removeColumnButton.addEventListener('click', removeColumn);

document.addEventListener('DOMCountetLoaded', updateButtons());
