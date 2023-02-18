'use strict';

const tableBody = document
  .querySelector('table')
  .querySelector('tbody');

const removeRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const addColumn = document.querySelector('.append-column');

removeColumn.addEventListener('click', e => {
  for (const row of tableBody.children) {
    if (row.childElementCount > 2) {
      row.lastElementChild.remove();
    }
  }
});

removeRow.addEventListener('click', e => {
  if (tableBody.childElementCount > 2) {
    tableBody.lastElementChild.remove();
  }
});

addRow.addEventListener('click', e => {
  if (tableBody.childElementCount < 10) {
    tableBody.append(tableBody.lastElementChild.cloneNode(true));
  }
});

addColumn.addEventListener('click', e => {
  for (const row of tableBody.children) {
    if (row.childElementCount < 10) {
      row.append(row.lastElementChild.cloneNode(true));
    }
  }
});
