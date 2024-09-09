'use strict';

// write code here
const MIN__COUNT = 2;
const MAX__COUNT = 10;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');
let rows = document.querySelectorAll('.field tbody tr');
let columnsCount = 4;

function updateRowList() {
  rows = document.querySelectorAll('.field tbody tr');
}

function buttonsState() {
  if (rows.length >= MAX__COUNT) {
    addRowButton.disabled = true;
  } else {
    addRowButton.disabled = false;
  }

  if (rows.length <= MIN__COUNT) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (columnsCount >= MAX__COUNT) {
    addColumnButton.disabled = true;
  } else {
    addColumnButton.disabled = false;
  }

  if (columnsCount <= MIN__COUNT) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

addRowButton.addEventListener('click', () => {
  if (rows.length < MAX__COUNT) {
    const tableRow = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      const rowCells = document.createElement('td');

      tableRow.appendChild(rowCells);
    }
    table.appendChild(tableRow);
    updateRowList();
    buttonsState();
  }
});

removeRowButton.addEventListener('click', () => {
  if (rows.length > MIN__COUNT) {
    table.deleteRow(rows.length - 1);
    updateRowList();
    buttonsState();
  }
});

addColumnButton.addEventListener('click', () => {
  if (columnsCount < MAX__COUNT) {
    for (const row of rows) {
      const tableCells = document.createElement('td');

      row.appendChild(tableCells);
    }
    columnsCount++;
    buttonsState();
  }
});

removeColumnButton.addEventListener('click', () => {
  if (columnsCount > MIN__COUNT) {
    for (const row of rows) {
      row.removeChild(row.lastElementChild);
    }
    columnsCount--;
    buttonsState();
  }
});

buttonsState();
