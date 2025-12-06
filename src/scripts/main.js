'use strict';

// write code here

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButton() {
  const rowsAmount = field.querySelectorAll('tr').length;
  const columnAmount = field.querySelectorAll('tr:last-child td').length;

  appendRowButton.disabled = rowsAmount >= 10;
  removeRowButton.disabled = rowsAmount <= 2;
  appendColumnButton.disabled = columnAmount >= 10;
  removeColumnButton.disabled = columnAmount <= 2;
}

function addRow() {
  const tr = field.querySelector('tr:last-child');
  const trClone = tr.cloneNode(true);

  field.appendChild(trClone);
  updateButton();
}

function addColumn() {
  for (const tr of field.querySelectorAll('tr')) {
    tr.appendChild(document.createElement('td'));
  }
  updateButton();
}

function removeRow() {
  const rows = field.querySelectorAll('tr');
  const tr = rows[rows.length - 1];

  if (!tr) {
    return;
  }
  tr.remove();
  updateButton();
}

function removeColumn() {
  for (const td of field.querySelectorAll('tr td:last-child')) {
    td.remove();
  }
  updateButton();
}

appendRowButton.addEventListener('click', addRow);

removeRowButton.addEventListener('click', removeRow);
removeColumnButton.addEventListener('click', removeColumn);
appendColumnButton.addEventListener('click', addColumn);
updateButton();
