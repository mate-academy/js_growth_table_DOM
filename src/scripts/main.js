'use strict';

const tBody = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const maxAmount = 10;
const minAmount = 2;
const maxColumnsAmount = 9;

const tableRows = tBody.rows;
let rowsAmount = tableRows.length;

addRowButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length;

  rowsAmount++;

  const rows = document.createElement('tr');

  for (let i = 0; i < columnsAmount; i++) {
    const cells = document.createElement('td');

    rows.append(cells);
    tBody.append(rows);
  }

  if (removeRowButton.disabled && rowsAmount > minAmount) {
    removeRowButton.disabled = false;
  }

  if (rowsAmount >= maxAmount) {
    addRowButton.disabled = true;
  }
}
);

removeRowButton.addEventListener('click', () => {
  rowsAmount--;
  tBody.lastElementChild.remove();

  if (rowsAmount <= minAmount) {
    removeRowButton.disabled = true;
  }

  if (rowsAmount < maxAmount && addRowButton.disabled) {
    addRowButton.disabled = false;
  }
});

addColumnButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length;

  for (const item of tableRows) {
    const cell = document.createElement('td');

    item.append(cell);
  }

  if (columnsAmount >= maxColumnsAmount) {
    addColumnButton.disabled = true;
  }

  if (columnsAmount >= minAmount && removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length - 1;

  for (const item of tableRows) {
    item.lastElementChild.remove();
  }

  if (columnsAmount <= maxColumnsAmount && addColumnButton.disabled) {
    addColumnButton.disabled = false;
  }

  if (columnsAmount <= minAmount) {
    removeColumnButton.disabled = true;
  }
});
