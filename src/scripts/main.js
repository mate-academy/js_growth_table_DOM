'use strict';

const tbody = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function handleCondition() {
  addRow.disabled = tbody.childElementCount === MAX_COUNT;
  removeRow.disabled = tbody.childElementCount === MIN_COUNT;

  addColumn.disabled
  = tbody.firstElementChild.childElementCount === MAX_COUNT;

  removeColumn.disabled
    = tbody.firstElementChild.childElementCount === MIN_COUNT;
}

addRow.addEventListener('click', () => {
  tbody.append(tbody.firstElementChild.cloneNode(true));

  handleCondition();
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  handleCondition();
});

addColumn.addEventListener('click', () => {
  [...tbody.rows].forEach(row => {
    row.append(row.lastElementChild.cloneNode(true));
  });

  handleCondition();
});

removeColumn.addEventListener('click', () => {
  [...tbody.rows].forEach(row => {
    row.lastElementChild.remove();
  });

  handleCondition();
});
