'use strict';

const container = document.querySelector('.container');
const tableBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (action) => {
  const rows = tableBody.children;

  if (action.target === appendRow) {
    tableBody.append(tableBody.firstElementChild.cloneNode(true));
  } else if (action.target === removeRow) {
    tableBody.lastElementChild.remove();
  } else if (action.target === appendColumn) {
    for (const row of rows) {
      row.append(row.firstElementChild.cloneNode(true));
    }
  } else if (action.target === removeColumn) {
    for (const row of rows) {
      row.lastElementChild.remove();
    }
  }

  appendRow.disabled = tableBody.children.length >= 10;
  removeRow.disabled = tableBody.children.length <= 2;
  appendColumn.disabled = tableBody.firstElementChild.children.length >= 10;
  removeColumn.disabled = tableBody.firstElementChild.children.length <= 2;
});
