'use strict';

// write code here
const field = document.querySelector('tbody');
const rows = field.rows;
let columnCount = rows[0].children.length;
let rowCount = rows.length;

const minCount = 2;
const maxCount = 10;

const addRowButton = document.querySelector('.append-row');
const addColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const container = document.querySelector('.container');

container.addEventListener('click', (button) => {
  const clickButton = button.target.classList[0];

  switch (clickButton) {
    case 'append-column':
      if (columnCount < maxCount) {
        for (const row of rows) {
          const cloneCell = row.cells[0].cloneNode(true);

          row.insertBefore(cloneCell, row.children[0]);
        }
      }
      columnCount++;
      break;

    case 'remove-column':
      if (columnCount > minCount) {
        for (const row of rows) {
          row.cells[0].remove();
        }
      }
      columnCount--;
      break;

    case 'append-row':
      if (rowCount < maxCount) {
        const cloneRow = rows[0].cloneNode(true);

        field.append(cloneRow);
      }
      rowCount++;
      break;

    case 'remove-row':
      if (rowCount > minCount) {
        rows[0].remove();
      }
      rowCount--;
      break;
  }
  addColumnButton.disabled = columnCount === maxCount;
  removeColumnButton.disabled = columnCount === minCount;
  addRowButton.disabled = rowCount === maxCount;
  removeRowButton.disabled = rowCount === minCount;
});
