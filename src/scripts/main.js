'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tableBody = table.children[0];
const rows = tableBody.rows;
let rowsCount = rows.length;
const columns = tableBody.children;
let columnsCount = columns.length;

addRow.addEventListener('click', e => {
  rowsCount++;

  const rowToAdd = tableBody.children[tableBody.children.length - 1];

  tableBody.append(rowToAdd.cloneNode(true));
  deleteRow.removeAttribute('disabled');

  if (rowsCount === 10) {
    e.target.setAttribute('disabled', 'true');
  }
});

deleteRow.addEventListener('click', e => {
  rowsCount--;

  const rowToDelete = tableBody.children[tableBody.children.length - 1];

  tableBody.removeChild(rowToDelete);
  addRow.removeAttribute('disabled');

  if (rowsCount === 2) {
    e.target.setAttribute('disabled', 'true');
  }
});

addColumn.addEventListener('click', e => {
  columnsCount++;

  for (const each of tableBody.children) {
    const cellToAdd = each.lastElementChild;

    each.append(cellToAdd.cloneNode(true));
    deleteColumn.removeAttribute('disabled');
  }

  if (columnsCount === 10) {
    e.target.setAttribute('disabled', 'true');
  }
});

deleteColumn.addEventListener('click', e => {
  columnsCount--;

  for (const each of tableBody.children) {
    const cellToRemove = each.lastElementChild;

    each.removeChild(cellToRemove);
    addColumn.removeAttribute('disabled');
  }

  if (columnsCount === 2) {
    e.target.setAttribute('disabled', 'true');
  }
});
