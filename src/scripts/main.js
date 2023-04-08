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

  if (table.rows.length < 10) {
    table.appendChild(newRow);
  }
});

removeRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];

  if (table.rows.length > 2) {
    lastRow.remove();
  }
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');

    if (rows[i].cells.length < 10) {
      rows[i].appendChild(newCell);
    }
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const lastCell = table.rows[i].lastElementChild;

    if (rows[i].cells.length > 2) {
      lastCell.remove();
    }
  }
});
