'use strict';

const MIN__AMOUNT = 2;
const MAX_AMOUNT = 10;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');
let rows = document.querySelectorAll('.field tbody tr');
let columnsCount = 4;

function updateRowsList() {
  rows = document.querySelectorAll('.field tbody tr'); // Update rows NodeList
}

function toggleButtonsState() {
  if (rows.length >= MAX_AMOUNT) {
    addRowButton.disabled = true;
  } else {
    addRowButton.disabled = false;
  }

  if (rows.length <= MIN__AMOUNT) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (columnsCount >= MAX_AMOUNT) {
    addColumnButton.disabled = true;
  } else {
    addColumnButton.disabled = false;
  }

  if (columnsCount <= MIN__AMOUNT) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

addRowButton.addEventListener('click', () => {
  if (rows.length < MAX_AMOUNT) {
    const tableRow = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      const tableData = document.createElement('td');

      tableRow.appendChild(tableData);
    }

    table.appendChild(tableRow);
    updateRowsList();
    toggleButtonsState();
  }
});

removeRowButton.addEventListener('click', () => {
  if (rows.length > MIN__AMOUNT) {
    table.deleteRow(rows.length - 1);
    updateRowsList();
    toggleButtonsState();
  }
});

addColumnButton.addEventListener('click', () => {
  if (columnsCount < MAX_AMOUNT) {
    rows.forEach((row) => {
      const tableData = document.createElement('td');

      row.appendChild(tableData);
    });

    columnsCount++;
    toggleButtonsState();
  }
});

removeColumnButton.addEventListener('click', () => {
  if (columnsCount > MIN__AMOUNT) {
    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    columnsCount--;
    toggleButtonsState();
  }
});

toggleButtonsState();
