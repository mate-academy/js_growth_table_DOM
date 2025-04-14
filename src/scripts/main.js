'use strict';

const btnAddRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

let currentRows = 4;
let currentCols = 4;

const MAX = 10;
const MIN = 2;

btnAddCol.addEventListener('click', () => {
  btnRemoveCol.disabled = false;

  if (currentCols < MAX) {
    [...document.querySelectorAll('tr')].forEach((row) => {
      row.append(document.createElement('td'));
    });
    currentCols++;
  }

  if (currentCols === MAX) {
    event.target.disabled = true;
  }
});

btnRemoveCol.addEventListener('click', () => {
  btnAddCol.disabled = false;

  if (currentCols > MIN) {
    [...document.querySelectorAll('tr')].forEach((row) => {
      row.removeChild(row.querySelector('td'));
    });
    currentCols--;
  }

  if (currentCols === MIN) {
    btnRemoveCol.disabled = true;
  }
});

btnAddRow.addEventListener('click', () => {
  btnRemoveRow.disabled = false;

  if (currentRows < MAX) {
    const initialTr = document.querySelector('tr');
    const tr = document.createElement('tr');

    tr.innerHTML = initialTr.innerHTML;
    table.appendChild(tr);
    currentRows++;
  }

  if (currentRows === MAX) {
    btnAddRow.disabled = true;
  }
});

btnRemoveRow.addEventListener('click', () => {
  if (currentRows > MIN) {
    const tr = document.querySelector('tr');

    table.removeChild(tr);
    currentRows--;
    btnAddRow.disabled = false;
  }

  if (currentRows === MIN) {
    btnRemoveRow.disabled = true;
  }
});
