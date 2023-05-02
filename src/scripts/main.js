'use strict';

const appendRow = document.querySelector('.append-row');

const appendColumn = document.querySelector('.append-column');

const removeColumn = document.querySelector('.remove-column');

const removeRow = document.querySelector('.remove-row');

const tableBody = document.querySelector('tbody');

const rowList = document.querySelectorAll('tr');

let rowNumber = rowList.length;

const colList = rowList[0].querySelectorAll('td');

let colNumber = colList.length;

appendRow.addEventListener('click', () => {
  if (rowNumber < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < colNumber; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    tableBody.append(newRow);

    rowNumber += 1;

    removeRow.disabled = false;

    if (rowNumber === 10) {
      appendRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', () => {
  if (colNumber < 10) {
    for (let i = 0; i < rowNumber; i++) {
      const newCell = document.createElement('td');

      document.querySelectorAll('tr')[i].append(newCell);
    }

    colNumber += 1;

    removeColumn.disabled = false;

    if (colNumber === 10) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', () => {
  if (colNumber > 2) {
    for (let i = 0; i < rowNumber; i++) {
      document.querySelectorAll('tr')[i].lastElementChild.remove();
    }

    colNumber -= 1;

    appendColumn.disabled = false;

    if (colNumber === 2) {
      removeColumn.disabled = true;
    }
  }
});

removeRow.addEventListener('click', () => {
  if (rowNumber > 2) {
    tableBody.lastElementChild.remove();

    rowNumber -= 1;

    appendRow.disabled = false;

    if (rowNumber === 2) {
      removeRow.disabled = true;
    }
  }
});
