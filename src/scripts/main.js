'use strict';

const tableChild = document.querySelector('table').firstElementChild;
const container = document.querySelector('.container');

const buttonCreateRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonCreateColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

container.addEventListener('click', (action) => {
  const rowsCollection = [...tableChild.children];

  switch (action.target) {
    case buttonCreateRow:
      buttonRemoveRow.disabled = false;

      tableChild.children.length < 10
        ? tableChild.append(tableChild.firstElementChild.cloneNode(true))
        : buttonCreateRow.disabled = true;
      break;

    case buttonRemoveRow:
      buttonCreateRow.disabled = false;

      tableChild.children.length > 2
        ? tableChild.lastElementChild.remove()
        : buttonRemoveRow.disabled = true;
      break;

    case buttonCreateColumn:
      buttonRemoveColumn.disabled = false;

      rowsCollection.forEach(function(row) {
        row.children.length < 10
          ? row.append(row.firstElementChild.cloneNode(true))
          : buttonCreateColumn.disabled = true;
      });
      break;

    case buttonRemoveColumn:
      buttonCreateColumn.disabled = false;

      rowsCollection.forEach(function(row) {
        row.children.length > 2
          ? row.lastElementChild.remove()
          : buttonRemoveColumn.disabled = true;
      });
  }
});
