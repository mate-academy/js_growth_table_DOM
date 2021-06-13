'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  if (table.lastElementChild.rows.length >= 10) {
    return;
  }

  const elementRow = document.createElement('tr');
  const currentCells = [...table.lastElementChild.lastElementChild.children];

  table.lastElementChild.appendChild(elementRow);

  for (const cell of currentCells) {
    elementRow.appendChild(cell.cloneNode());
  }
});

removeRow.addEventListener('click', () => {
  if (table.lastElementChild.rows.length <= 2) {
    return;
  }

  const lastRow = table.lastElementChild.lastElementChild;

  lastRow.remove();
});

addColumn.addEventListener('click', () => {
  if (table.lastElementChild.lastElementChild.cells.length >= 10) {
    return;
  }

  const rows = [...table.lastElementChild.children];

  for (const row of rows) {
    const item = document.createElement('td');

    row.append(item);
  }
});

removeColumn.addEventListener('click', () => {
  if (table.lastElementChild.lastElementChild.children.length <= 2) {
    return;
  }

  const rows = [...table.lastElementChild.children];

  for (const row of rows) {
    const lastColumn = row.lastElementChild;

    lastColumn.remove();
  }
});
