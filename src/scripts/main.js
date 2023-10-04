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

  if (toResize === 'append-row') {
    rowCount++;

    const tableRowCopy = tableRow.cloneNode(true);

    table.append(tableRowCopy);
  };

  if (toResize === 'remove-row') {
    rowCount--;
    table.removeChild(tableRow);
  };

  if (toResize === 'append-column') {
    columnCount++;

    tableRows.forEach(row => {
      const newCol = document.createElement('td');

      row.append(newCol);
    });
  };

  if (toResize === 'remove-column') {
    columnCount--;

    tableRows.forEach(row => {
      const rowToGo = row.querySelector('td');

      row.removeChild(rowToGo);
    });
  };

  if (rowCount === 10) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }

  if (rowCount === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (columnCount === 10) {
    addCol.disabled = true;
  } else {
    addCol.disabled = false;
  }

  if (columnCount === 2) {
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
});
