'use strict';

const growthTable = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const minCells = 2;
const maxCells = 10;

let rowNumber = growthTable.rows.length;
let columnNumber = growthTable.rows[0].cells.length;

appendRowButton.addEventListener('click', () => {
  if (rowNumber !== maxCells) {
    const newRow = growthTable.rows[0].cloneNode(true);

    document.querySelector('tbody').appendChild(newRow);
    rowNumber++;
  }

  if (rowNumber === maxCells) {
    appendRowButton.disabled = true;
  }

  if (rowNumber > minCells) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  if (rowNumber !== minCells) {
    document
      .querySelector('tbody')
      .removeChild(growthTable.rows[rowNumber - 1]);
    rowNumber--;
  }

  if (rowNumber === minCells) {
    removeRowButton.disabled = true;
  }

  if (rowNumber < maxCells) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', (e) => {
  if (columnNumber !== maxCells) {
    [...growthTable.rows].forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
    columnNumber++;
  }

  if (columnNumber === maxCells) {
    appendColumnButton.disabled = true;
  }

  if (columnNumber > minCells) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  if (columnNumber !== minCells) {
    [...growthTable.rows].forEach((row) => {
      row.deleteCell(columnNumber - 1);
    });
    columnNumber--;
  }

  if (columnNumber === minCells) {
    removeColumnButton.disabled = true;
  }

  if (columnNumber < maxCells) {
    appendColumnButton.disabled = false;
  }
});
