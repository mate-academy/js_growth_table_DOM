'use strict';

const container = document.querySelector('.container');
const tableBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (action) => {
  const rows = [...tableBody.children];

  switch (action.target) {
    case appendRow:
      tableBody.append(tableBody.firstElementChild.cloneNode(true));
      break;
    case removeRow:
      tableBody.lastElementChild.remove();
      break;
    case appendColumn:
      for (const row of rows) {
        row.append(row.firstElementChild.cloneNode(true));
      }
      break;
    case removeColumn:
      for (const row of rows) {
        row.lastElementChild.remove();
      }
      break;
  }
  appendRow.disabled = tableBody.children.length >= 10;
  removeRow.disabled = tableBody.children.length <= 2;
  appendColumn.disabled = tableBody.firstElementChild.children.length >= 10;
  removeColumn.disabled = tableBody.firstElementChild.children.length <= 2;
});
