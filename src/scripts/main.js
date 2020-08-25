'use strict';

const maxRows = 10;
const maxCols = 10;
const minCols = 2;
const minRows = 2;
let currentRows = 4;
let currentCols = 4;
const table = document.querySelector('tbody');
const btnAddRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');

btnAddRow.addEventListener('click', (event) => {
  btnRemoveRow.disabled = false;

  if (currentRows < maxRows) {
    const initialTr = document.querySelector('tr');
    const tr = document.createElement('tr');

    tr.innerHTML = initialTr.innerHTML;
    table.appendChild(tr);
    currentRows++;
  }

  if (currentRows === maxRows) {
    event.target.disabled = true;
  }
});

btnRemoveRow.addEventListener('click', (event) => {
  if (currentRows > minRows) {
    const tr = document.querySelector('tr');

    table.removeChild(tr);
    currentRows--;
    btnAddRow.disabled = false;
  };

  if (currentRows === minRows) {
    event.target.disabled = true;
  };
});

btnAddCol.addEventListener('click', (event) => {
  btnRemoveCol.disabled = false;

  if (currentCols < maxCols) {
    [...document.querySelectorAll('tr')].forEach(row => {
      row.append(document.createElement('td'));
    });
    currentCols++;
  };

  if (currentCols === maxCols) {
    event.target.disabled = true;
  };
});

btnRemoveCol.addEventListener('click', (event) => {
  btnAddCol.disabled = false;

  if (currentCols > minCols) {
    [...document.querySelectorAll('tr')].forEach((row) => {
      row.removeChild(row.querySelector('td'));
    });
    currentCols--;
  };

  if (currentCols === minCols) {
    event.target.disabled = true;
  };
});
