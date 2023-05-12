'use strict';

const tbody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');

const addColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

addRow.addEventListener('click', () => {
  tbody.append(tbody.lastElementChild.cloneNode(true));

  addRow.disabled = tbody.childElementCount === maxRows;
  remRow.disabled = false;
});

remRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  remRow.disabled = tbody.childElementCount === minRows;
  addRow.disabled = false;
});

addColumn.addEventListener('click', () => {
  [...tbody.rows].forEach(item => {
    item.append(item.lastElementChild.cloneNode(true));
  });

  addColumn.disabled = tbody.children[0].childElementCount === maxColumns;
  remColumn.disabled = false;
});

remColumn.addEventListener('click', () => {
  [...tbody.rows].forEach(item => {
    item.lastElementChild.remove();
  });

  remColumn.disabled = tbody.children[0].childElementCount === minColumns;
  addColumn.disabled = false;
});
