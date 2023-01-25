'use strict';

const growthTable = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

let rowNumber = growthTable.rows.length;
let columnNumber = growthTable.rows[0].cells.length;

appendRowButton.addEventListener('click', (e) => {
  const newRow = growthTable.rows[0].cloneNode(true);

  document.querySelector('tbody').appendChild(newRow);
  rowNumber++;

  if (rowNumber === 10) {
    appendRowButton.disabled = true;
  }

  if (removeRowButton.disabled) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  document.querySelector('tbody').removeChild(growthTable.rows[rowNumber - 1]);
  rowNumber--;

  if (rowNumber === 2) {
    removeRowButton.disabled = true;
  }

  if (appendRowButton.disabled) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', (e) => {
  [...growthTable.rows].forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  columnNumber++;

  if (columnNumber === 10) {
    appendColumnButton.disabled = true;
  }

  if (removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  [...growthTable.rows].forEach((row) => {
    row.deleteCell(columnNumber - 1);
  });
  columnNumber--;

  if (columnNumber === 2) {
    removeColumnButton.disabled = true;
  }

  if (appendColumnButton.disabled) {
    appendColumnButton.disabled = false;
  }
});
