'use strict';

// write code here
const table = document.querySelector('.field');
const rowsT = table.rows;
const copyOfInRows = [...rowsT];

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let counterOfColumns = copyOfInRows[0].children.length;

addRow.addEventListener('click', (e) => {
  if (rowsT.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < counterOfColumns; i++) {
      const newTd = document.createElement('td');

      newRow.append(newTd);
    }
    table.tBodies[0].append(newRow);
    removeRow.disabled = false;

    if (rowsT.length === 10) {
      addRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', (e) => {
  const rowToRemove = rowsT[rowsT.length - 1];

  if (rowsT.length > 2) {
    addRow.disabled = false;
    rowToRemove.remove();

    if (rowsT.length === 2) {
      removeRow.disabled = true;
    }
  }
});

addColumn.addEventListener('click', (e) => {
  if (counterOfColumns < 10) {
    removeColumn.disabled = false;

    for (let i = 0; i < rowsT.length; i++) {
      const newTd = document.createElement('td');

      rowsT[i].append(newTd);
    }
    counterOfColumns++;

    if (counterOfColumns === 10) {
      addColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', (e) => {
  if (counterOfColumns > 2) {
    addColumn.disabled = false;

    for (let i = 0; i < rowsT.length; i++) {
      const lastTd = rowsT[i].lastElementChild;

      lastTd.remove();
    }
    counterOfColumns--;

    if (counterOfColumns === 2) {
      removeColumn.disabled = true;
    }
  }
});
