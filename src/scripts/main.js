'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableCell = document.createElement('td');
const tableRow = document.body.getElementsByTagName('tr');
const maxOfElements = 10;
const minOfElements = 2;
let countRows = table.rows.length;
let countColumns = table.rows[0].cells.length;

addRow.addEventListener('click', () => {
  countRows++;
  checkerOnEnable(countRows, addRow, removeRow);
  addElement('row');
});

addColumn.addEventListener('click', () => {
  countColumns++;
  checkerOnEnable(countColumns, addColumn, removeColumn);
  addElement('column');
});

removeRow.addEventListener('click', () => {
  countRows--;
  checkerOnEnable(countRows, addRow, removeRow);
  removeElement('row');
});

removeColumn.addEventListener('click', () => {
  countColumns--;
  checkerOnEnable(countColumns, addColumn, removeColumn);
  removeElement('column');
});

function addElement(element) {
  if (element === 'row') {
    const row = table.rows[0];

    table.append(row.cloneNode(true));
  }

  if (element === 'column') {
    const tableRowArr = [...tableRow];

    tableRowArr.forEach(item => item.append(tableCell.cloneNode(true)));
  }
}

function removeElement(element) {
  if (element === 'row') {
    const row = table.rows[table.rows.length - 1];

    row.remove();
  }

  if (element === 'column') {
    const tableRowArr = [...tableRow];

    tableRowArr.forEach(item => item.lastElementChild.remove());
  }
}

function checkerOnEnable(countOfItems, addItem, removeItem) {
  if (countOfItems < maxOfElements && countOfItems > minOfElements) {
    addItem.disabled = false;
    removeItem.disabled = false;
  } else if (countOfItems === minOfElements) {
    removeItem.disabled = true;
  } else if (countOfItems === maxOfElements) {
    addItem.disabled = true;
  }
}
