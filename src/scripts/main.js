'use strict';

const tBody = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

let rowsAmount = tBody.rows.length;
const tableRows = tBody.rows;

addRowButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length;

  rowsAmount++;

  const rows = document.createElement('tr');

  for (let i = 0; i < columnsAmount; i++) {
    const cells = document.createElement('td');

    rows.append(cells);
    tBody.append(rows);
  }

  if (removeRowButton.disabled && rowsAmount > 2) {
    removeRowButton.disabled = false;
  }

  if (rowsAmount >= 10) {
    addRowButton.disabled = true;
  }
}
);

removeRowButton.addEventListener('click', () => {
  rowsAmount--;
  tBody.lastElementChild.remove();

  if (rowsAmount <= 2) {
    removeRowButton.disabled = true;
  }

  if (rowsAmount < 10 && addRowButton.disabled) {
    addRowButton.disabled = false;
  }
});

addColumnButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length;

  for (const item of tableRows) {
    const cell = document.createElement('td');

    item.append(cell);
  }

  if (columnsAmount >= 9) {
    addColumnButton.disabled = true;
  }

  if (columnsAmount >= 2 && removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  const columnsAmount = tBody.rows[0].cells.length - 1;

  for (const item of tableRows) {
    item.lastElementChild.remove();
  }

  if (columnsAmount <= 9 && addColumnButton.disabled) {
    addColumnButton.disabled = false;
  }

  if (columnsAmount <= 2) {
    removeColumnButton.disabled = true;
  }
});
