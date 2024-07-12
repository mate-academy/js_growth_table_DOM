'use strict';

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);

function addColumn() {
  const rows = document.querySelectorAll('tr');
  const newColumn = document.createElement('td');

  rows.forEach((row) => {
    row.appendChild(newColumn.cloneNode(true));
  });

  const columns = rows[0].querySelectorAll('td');

  if (columns.length >= MAX_NUMBER) {
    appendColumnButton.setAttribute('disabled', '');
  }

  removeColumnButton.removeAttribute('disabled');
}

function removeColumn() {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length > MIN_NUMBER) {
      row.removeChild(row.lastChild);
    }
  });

  const columns = rows[0].querySelectorAll('td');

  if (columns.length <= MIN_NUMBER) {
    removeColumnButton.setAttribute('disabled', '');
  }

  appendColumnButton.removeAttribute('disabled');
}

function addRow() {
  const table = document.querySelector('.field');
  const rows = table.querySelectorAll('tr');
  const newRow = document.createElement('tr');

  for (let i = 0; i < rows[1].cells.length; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  table.appendChild(newRow);

  if (rows.length >= MAX_NUMBER) {
    appendRowButton.setAttribute('disabled', '');
  }

  removeRowButton.removeAttribute('disabled');
}

function removeRow() {
  const table = document.querySelector('.field');
  const rows = table.querySelectorAll('tr');

  if (rows.length > MIN_NUMBER) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  const updatedRows = table.querySelectorAll('tr');

  if (updatedRows.length <= MIN_NUMBER) {
    removeRowButton.setAttribute('disabled', '');
  }

  appendRowButton.removeAttribute('disabled');
}
