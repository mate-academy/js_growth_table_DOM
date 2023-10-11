'use strict';

// write code here

const buttons = document.querySelector('.container');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
let rowCount = 4;
let columnCount = 4;

buttons.addEventListener('click', function(evt) {
  evt.preventDefault();

  const table = document.querySelector('tbody');
  const tableRow = document.querySelector('tr');
  const tableRows = document.querySelectorAll('tr');
  const toResize = evt.target.classList[0];

  switch (toResize) {
    case 'append-row':
      rowCount++;

      const tableRowCopy = tableRow.cloneNode(true);

      table.append(tableRowCopy);
      break;
    case 'remove-row':
      rowCount--;
      table.removeChild(tableRow);
      break;
    case 'append-column':
      columnCount++;

      tableRows.forEach(row => {
        const newCol = document.createElement('td');

        row.append(newCol);
      });
      break;
    case 'remove-column':
      columnCount--;

      tableRows.forEach(row => {
        const rowToGo = row.querySelector('td');

        row.removeChild(rowToGo);
      });
  };

  const max = 10;
  const min = 2;

  rowCount === max ? addRow.disabled = true : addRow.disabled = false;
  rowCount === min ? removeRow.disabled = true : removeRow.disabled = false;
  columnCount === max ? addCol.disabled = true : addCol.disabled = false;
  columnCount === min ? removeCol.disabled = true : removeCol.disabled = false;
});
