'use strict';

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
  if (rows.length >= 10) {
    addRowButton.disabled = true;
  } else {
    addRowButton.disabled = false;
  }

  if (rows.length <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (columnsCount >= 10) {
    addColumnButton.disabled = true;
  } else {
    addColumnButton.disabled = false;
  }

  if (columnsCount <= 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

addRowButton.addEventListener('click', () => {
  if (rows.length < 10) {
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
  if (rows.length > 2) {
    table.deleteRow(rows.length - 1);
    updateRowsList();
    toggleButtonsState();
  }
});

addColumnButton.addEventListener('click', () => {
  if (columnsCount < 10) {
    rows.forEach((row) => {
      const tableData = document.createElement('td');

      row.appendChild(tableData);
    });

    columnsCount++;
    toggleButtonsState();
  }
});

removeColumnButton.addEventListener('click', () => {
  if (columnsCount > 2) {
    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    columnsCount--;
    toggleButtonsState();
  }
});

toggleButtonsState();
