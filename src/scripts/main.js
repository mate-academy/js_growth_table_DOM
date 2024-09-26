'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableCell = document.createElement('td');
const tableRows = document.body.getElementsByTagName('tr');
const maxOfElements = 10;
const minOfElements = 2;
let countRows = table.rows.length;
let countColumns = table.rows[0].cells.length;

const createEventBtn = function add(button, removeItem, item) {
  button.addEventListener('click', () => {
    switch (button) {
      case addRow:
        countRows++;
        checkerOnEnable(countRows, button, removeItem);
        addElement(item);
        break;

      case addColumn:
        countColumns++;
        checkerOnEnable(countColumns, button, removeItem);
        addElement(item);
        break;

      case removeRow:
        countRows--;
        checkerOnEnable(countRows, removeItem, button);
        removeElement(item);
        break;

      case removeColumn:
        countColumns--;
        checkerOnEnable(countColumns, removeItem, button);
        removeElement(item);
        break;
    }
  });
};

createEventBtn(addRow, removeRow, 'row');
createEventBtn(addColumn, removeColumn, 'column');
createEventBtn(removeRow, addRow, 'row');
createEventBtn(removeColumn, addColumn, 'column');

function addElement(element) {
  switch (element) {
    case 'row':
      const row = table.rows[0];
      const bodyTable = table.tBodies[0];

      bodyTable.append(row.cloneNode(true));
      break;
    case 'column':
      const tableRowArr = [...tableRows];

      tableRowArr.forEach(item => item.append(tableCell.cloneNode()));
      break;
  }
}

function removeElement(element) {
  switch (element) {
    case 'row':
      const lastIndex = table.rows.length - 1;
      const row = table.rows[lastIndex];

      row.remove();
      break;

    case 'column':
      const tableRowArr = [...tableRows];

      tableRowArr.forEach(item => item.lastElementChild.remove());
      break;
  }
}

function checkerOnEnable(countOfItems, addItem, removeItem) {
  const countBigger = countOfItems < maxOfElements;
  const countLess = countOfItems > minOfElements;

  if (countBigger && countLess) {
    addItem.disabled = false;
    removeItem.disabled = false;
  } else if (countOfItems === minOfElements) {
    removeItem.disabled = true;
  } else if (countOfItems === maxOfElements) {
    addItem.disabled = true;
  }
}
