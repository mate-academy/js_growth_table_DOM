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

      buttonCreateRow.disabled = tableChild.children.length >= 9;
      tableChild.append(tableChild.firstElementChild.cloneNode(true));
      break;

    case buttonRemoveRow:
      buttonCreateRow.disabled = false;

      buttonRemoveRow.disabled = tableChild.children.length <= 3;
      tableChild.lastElementChild.remove();
      break;

    case buttonCreateColumn:
      buttonRemoveColumn.disabled = false;

      rowsCollection.forEach(row => {
        buttonCreateColumn.disabled = row.children.length >= 9;
        row.append(row.firstElementChild.cloneNode(true));
      });
      break;

    case buttonRemoveColumn:
      buttonCreateColumn.disabled = false;

      rowsCollection.forEach(row => {
        buttonRemoveColumn.disabled = row.children.length <= 3;
        row.lastElementChild.remove();
      });
  }
});
