'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');
const row = table.rows;

container.addEventListener('click', (event) => {
  if (event.target === appColumn) {
    [...row].forEach(elemTd => elemTd.append(document.createElement('td')));
  };

  if (event.target === remColumn) {
    [...row].forEach(elemtd => elemtd.lastElementChild.remove());
  };

  if (event.target === appRow) {
    table.append(row[0].cloneNode(true));
  };

  if (event.target === remRow) {
    table.lastElementChild.remove();
  };

  if (row.length === 10) {
    appRow.disabled = true;
  } else {
    if (row.length <= 10) {
      appRow.disabled = false;
    }
  };

  if (row.length === 2) {
    remRow.disabled = true;
  } else {
    if (row.length >= 2) {
      remRow.disabled = false;
    }
  };

  if (row[0].cells.length === 10) {
    appColumn.disabled = true;
  } else {
    if (row[0].cells.length <= 10) {
      appColumn.disabled = false;
    }
  };

  if (row[0].cells.length === 2) {
    remColumn.disabled = true;
  } else {
    if (row[0].cells.length >= 2) {
      remColumn.disabled = false;
    }
  };
});
