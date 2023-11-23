'use strict';

const tableBody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

addColumn.addEventListener('click', () => {
  [...tableBody.rows].forEach(item => {
    item.append(item.lastElementChild.cloneNode(true));
  });

  addColumn.disabled = tableBody.children[0].childElementCount === MAX_COLUMNS;
  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  [...tableBody.rows].forEach(item => {
    item.lastElementChild.remove();
  });

  const columns = tableBody.children[0].childElementCount;

  removeColumn.disabled = columns === MIN_COLUMNS;
  addColumn.disabled = false;
});

addRow.addEventListener('click', () => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  addRow.disabled = tableBody.childElementCount === MAX_ROWS;
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();

  removeRow.disabled = tableBody.childElementCount === MIN_ROWS;
  addRow.disabled = false;
});
