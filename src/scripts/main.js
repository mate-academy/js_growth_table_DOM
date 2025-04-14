'use strict';

const MAX_LENGTH = 10;
const MIN_LENGTH = 2;

const table = document.querySelector('tbody');

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButton() {
  const rowCount = table.querySelectorAll('tr').length;
  const colCount = table
    .querySelector('tr:first-child')
    .querySelectorAll('td').length;

  addRowButton.disabled = rowCount >= MAX_LENGTH;
  addColumnButton.disabled = colCount >= MAX_LENGTH;

  removeColumnButton.disabled = colCount <= MIN_LENGTH;
  removeRowButton.disabled = rowCount <= MIN_LENGTH;
}

addRowButton.addEventListener('click', () => {
  if (table.querySelectorAll('tr').length < MAX_LENGTH) {
    const rowToClone = table.querySelector('tr:last-child');
    const cloneToAdd = rowToClone.cloneNode(true);

    table.appendChild(cloneToAdd);
    updateButton();
  }
});

removeRowButton.addEventListener('click', () => {
  if (table.querySelectorAll('tr').length > MIN_LENGTH) {
    table.deleteRow(-1);
    updateButton();
  }
});

addColumnButton.addEventListener('click', () => {
  if (
    table.querySelector('tr:first-child').querySelectorAll('td').length <
    MAX_LENGTH
  ) {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];

      const lastCell = row.cells[row.cells.length - 1];
      const newCell = lastCell.cloneNode(true);

      row.appendChild(newCell);
      updateButton();
    }
  }
});

removeColumnButton.addEventListener('click', () => {
  if (
    table.querySelector('tr:first-child').querySelectorAll('td').length >
    MIN_LENGTH
  ) {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];

      row.deleteCell(-1);
      updateButton();
    }
  }
});
