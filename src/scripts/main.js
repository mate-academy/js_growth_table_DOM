'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const bodyTable = document.querySelector('table');

const allRows = bodyTable.getElementsByTagName('tr');

addRow.addEventListener('click', (e) => {
  if (allRows.length < 10) {
    const newRow = allRows[allRows.length - 1].cloneNode(true);

    bodyTable.append(newRow);
  }
});

removeRow.addEventListener('click', (e) => {
  if (allRows.length > 2) {
    allRows[allRows.length - 1].remove();
  }
});

addColumn.addEventListener('click', (e) => {
  if (allRows[0].children.length < 10) {
    for (let i = 0; i < allRows.length; i++) {
      const cell = document.createElement('td');

      allRows[i].append(cell);
    }
  }
});

removeColumn.addEventListener('click', (e) => {
  if (allRows[0].children.length > 2) {
    for (let i = 0; i < allRows.length; i++) {
      allRows[i].removeChild(allRows[i].lastElementChild);
    }
  }
});
