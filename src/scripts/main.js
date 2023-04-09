'use strict';

// write code here
const table = document.querySelector('table');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  const newRow = lastRow.cloneNode(true);
  const numberOfRows = table.rows.length;

  if (numberOfRows < 10) {
    table.appendChild(newRow);
  }
});

removeRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  const numberOfRows = table.rows.length;

  if (numberOfRows > 2) {
    lastRow.remove();
  }
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');
    const numberOfColumns = rows[i].cells.length;

    if (numberOfColumns < 10) {
      rows[i].appendChild(newCell);
    }
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const lastCell = table.rows[i].lastElementChild;
    const numberOfColumns = rows[i].cells.length;

    if (numberOfColumns > 2) {
      lastCell.remove();
    }
  }
});
