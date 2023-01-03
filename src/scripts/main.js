'use strict';

const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const table = document.querySelector('table');
let colNumber = 4;
let rowNumber = 4;
const maxCellsNum = 10;
const minCellsNum = 2;

function createTable(row, col) {
  table.innerHTML = '';

  for (let i = 1; i <= row; i++) {
    const tr = document.createElement('tr');

    for (let j = 1; j <= col; j++) {
      const td = document.createElement('td');

      tr.append(td);
    }
    table.append(tr);
  }
}

const funcAddCol = () => {
  colNumber++;

  if (colNumber >= maxCellsNum) {
    appendCol.disabled = true;
  };

  if (colNumber >= minCellsNum) {
    removeCol.disabled = false;
  }
  createTable(rowNumber, colNumber);
};

const funcRemCol = () => {
  colNumber--;

  if (colNumber <= maxCellsNum) {
    appendCol.disabled = false;
  };

  if (colNumber <= minCellsNum) {
    removeCol.disabled = true;
  }
  createTable(rowNumber, colNumber);
};

const funcAddRow = () => {
  rowNumber++;

  if (rowNumber >= maxCellsNum) {
    appendRow.disabled = true;
  };

  if (rowNumber >= minCellsNum) {
    removeRow.disabled = false;
  }
  createTable(rowNumber, colNumber);
};

const funcRemRow = () => {
  rowNumber--;

  if (rowNumber <= maxCellsNum) {
    appendRow.disabled = false;
  };

  if (rowNumber <= minCellsNum) {
    removeRow.disabled = true;
  }
  createTable(rowNumber, colNumber);
};

appendCol.addEventListener('click', funcAddCol);
removeCol.addEventListener('click', funcRemCol);
appendRow.addEventListener('click', funcAddRow);
removeRow.addEventListener('click', funcRemRow);
