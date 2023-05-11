'use strict';

const appRowButton = document.querySelector('.append-row');
const remRowButton = document.querySelector('.remove-row');
const appColButton = document.querySelector('.append-column');
const remColButton = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = table.rows;

function addRow() {
  const newRow = table.rows[0].cloneNode(true);

  tbody.append(newRow);

  if (rows.length === 10) {
    appRowButton.disabled = true;
  }

  if (remRowButton.disabled) {
    remRowButton.disabled = false;
  }
}

function delRow() {
  tbody.lastElementChild.remove();

  if (rows.length === 2) {
    remRowButton.disabled = true;
  }

  if (appRowButton.disabled) {
    appRowButton.disabled = false;
  }
}

function addCol() {
  for (const row of rows) {
    const newRow = document.createElement('td');

    row.append(newRow);
  }

  if (rows[0].cells.length === 10) {
    appColButton.disabled = true;
  }

  if (remColButton.disabled) {
    remColButton.disabled = false;
  }
}

function delCol() {
  for (const row of rows) {
    row.lastElementChild.remove();
  }

  if (rows[0].cells.length === 2) {
    remColButton.disabled = true;
  }

  if (appColButton.disabled) {
    appColButton.disabled = false;
  }
}

appRowButton.addEventListener('click', addRow);
remRowButton.addEventListener('click', delRow);
appColButton.addEventListener('click', addCol);
remColButton.addEventListener('click', delCol);
