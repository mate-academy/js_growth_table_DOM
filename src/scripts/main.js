'use strict';

const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const ROWS_MAX = 10;
const COLUMNS_MAX = 10;
const ROWS_MIN = 2;
const COLUMNS_MIN = 2;

let countRow = table.children.length;
let countColumn = table.firstElementChild.children.length;

checkLimit(appendRow, countRow, ROWS_MAX);
checkLimit(removeRow, countRow, ROWS_MIN);
checkLimit(removeColumn, countColumn, COLUMNS_MIN);
checkLimit(appendColumn, countColumn, COLUMNS_MAX);

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < countColumn; i++) {
    const newCell = document.createElement('td');

    newRow.insertAdjacentElement('beforeend', newCell);
  }

  table.insertAdjacentElement('beforeend', newRow);
  countRow++;

  checkLimit(appendRow, countRow, ROWS_MAX);
  checkLimit(removeRow, countRow, ROWS_MIN);
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();
  countRow--;

  checkLimit(removeRow, countRow, ROWS_MIN);
  checkLimit(appendRow, countRow, ROWS_MAX);
});

appendColumn.addEventListener('click', () => {
  const rows = table.children;

  for (let i = 0; i < countRow; i++) {
    const newCell = document.createElement('td');

    rows[i].insertAdjacentElement('beforeend', newCell);
  }
  countColumn++;

  checkLimit(appendColumn, countColumn, COLUMNS_MAX);
  checkLimit(removeColumn, countColumn, COLUMNS_MIN);
});

removeColumn.addEventListener('click', () => {
  const rows = table.children;

  for (let i = 0; i < countRow; i++) {
    rows[i].lastElementChild.remove();
  }
  countColumn--;

  checkLimit(removeColumn, countColumn, COLUMNS_MIN);
  checkLimit(appendColumn, countColumn, COLUMNS_MAX);
});

function checkLimit(button, current, limit) {
  if (current === limit) {
    button.setAttribute('disabled', '');
  } else if (button.hasAttribute('disabled', '')) {
    button.removeAttribute('disabled');
  }
}
