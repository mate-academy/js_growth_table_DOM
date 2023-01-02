'use strict';

const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const table = document.querySelector('table');
let colNumber = 4;
let rowNumber = 4;

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

  if (colNumber >= 10) {
    appendCol.disabled = true;
  };

  if (colNumber >= 2) {
    removeCol.disabled = false;
  }
  createTable(rowNumber, colNumber);
};

const funcRemCol = () => {
  colNumber--;

  if (colNumber <= 10) {
    appendCol.disabled = false;
  };

  if (colNumber <= 2) {
    removeCol.disabled = true;
  }
  createTable(rowNumber, colNumber);
};

const funcAddRow = () => {
  rowNumber++;

  if (rowNumber >= 10) {
    appendRow.disabled = true;
  };

  if (rowNumber >= 2) {
    removeRow.disabled = false;
  }
  createTable(rowNumber, colNumber);
};

const funcRemRow = () => {
  rowNumber--;

  if (rowNumber <= 10) {
    appendRow.disabled = false;
  };

  if (rowNumber <= 2) {
    removeRow.disabled = true;
  }
  createTable(rowNumber, colNumber);
};

appendCol.addEventListener('click', funcAddCol);
removeCol.addEventListener('click', funcRemCol);
appendRow.addEventListener('click', funcAddRow);
removeRow.addEventListener('click', funcRemRow);
