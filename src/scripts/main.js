'use strict';

const table = document.querySelector('.field');
const rows = document.getElementsByTagName('tr');

const rowPlus = document.querySelector('.append-row');
const rowMinus = document.querySelector('.remove-row');
const colPlus = document.querySelector('.append-column');
const colMinus = document.querySelector('.remove-column');

const countMin = 2;
const countMax = 10;

// events

rowPlus.addEventListener('click', e => {
  const cloneRow = rows[0].cloneNode(true);

  table.append(cloneRow);

  if (rows.length >= countMax) {
    rowPlus.disabled = true;
  }
});

rowMinus.addEventListener('click', e => {
  rows[rows.length - 1].remove();

  if (rows.length <= countMin) {
    rowMinus.disabled = true;
  }
});

colPlus.addEventListener('click', e => {
  for (const row of rows) {
    const newCell = document.createElement('td');

    row.append(newCell);

    if (row.children.length >= countMax) {
      colPlus.disabled = true;
    }
  }
});

colMinus.addEventListener('click', e => {
  for (const row of rows) {
    row.children[row.children.length - 1].remove();

    if (row.children.length <= countMin) {
      colMinus.disabled = true;
    }
  }
});
