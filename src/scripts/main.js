'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function handleCondition() {
  addRow.disabled = table.childElementCount === MAX_COUNT;
  removeRow.disabled = table.childElementCount === MIN_COUNT;

  addColumn.disabled = table.firstElementChild.childElementCount === MAX_COUNT;

  removeColumn.disabled
    = table.firstElementChild.childElementCount === MIN_COUNT;
}

addRow.addEventListener('click', () => {
  table.append(table.firstElementChild.cloneNode(true));

  handleCondition();
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  handleCondition();
});

addColumn.addEventListener('click', () => {
  [...table.rows].forEach(row =>
    row.append(row.firstElementChild.cloneNode(true)));

  handleCondition();
});

removeColumn.addEventListener('click', () => {
  [...table.rows].forEach(row =>
    row.firstElementChild.remove());

  handleCondition();
});
