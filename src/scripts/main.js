'use strict';

const tableBody = document.querySelector('table');
const tableRows = tableBody.rows;

const maxCount = 10;
const minCount = 2;

let columnCount = tableRows[0].children.length;
let rowCount = tableRows.length;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  const button = e.target;

  switch (button) {
    case addRowButton:
      tableBody.append(tableRows[0].cloneNode(true));

      rowCount++;
      break;

    case removeRowButton:
      tableRows[0].remove();

      rowCount--;
      break;

    case addColumnButton:
      [...tableRows].map(row => {
        row.append(row.cells[0].cloneNode(true), row.children[0]);
      });

      columnCount++;
      break;

    case removeColumnButton:
      [...tableRows].map(row => {
        row.cells[0].remove();
      });

      columnCount--;
      break;

    default:
      break;
  }

  addRowButton.disabled = rowCount === maxCount;
  removeRowButton.disabled = rowCount === minCount;
  addColumnButton.disabled = columnCount === maxCount;
  removeColumnButton.disabled = columnCount === minCount;
});
