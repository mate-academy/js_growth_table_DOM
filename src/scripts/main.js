'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function getAllRows() {
  return document.querySelectorAll('tr');
}

function getlengthOfRows() {
  return document.querySelectorAll('tr')[0].cells.length;
}

function addRowTable(e) {
  const target = e.target;
  const rowLength = getlengthOfRows();
  const allNewRows = getAllRows();

  if (target.classList.contains('append-row')) {
    const tableBody = document.querySelector('tbody');
    const newRow = document.createElement('tr');

    for (let i = 0; i < rowLength; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }
    tableBody.append(newRow);
  } else if (target.classList.contains('remove-row')) {
    if (allNewRows.length > 2) {
      const rowToDelete = table.rows[table.rows.length - 1];

      table.deleteRow(rowToDelete);
    }
  } else if (target.classList.contains('append-column')) {
    for (let i = 0; i < allNewRows.length; i++) {
      const additionalCell = document.createElement('td');

      allNewRows[i].append(additionalCell);
    }
  } else if (target.classList.contains('remove-column')) {
    for (let i = 0; i < allNewRows.length; i++) {
      allNewRows[i].deleteCell(-1);
    }
  }

  const newRowCount = getAllRows().length;

  addRow.disabled = newRowCount >= 10;
  removeRow.disabled = newRowCount <= 2;

  const newLengthOfRows = getlengthOfRows();

  addColumn.disabled = newLengthOfRows >= 10;
  removeColumn.disabled = newLengthOfRows <= 2;
}

container.addEventListener('click', addRowTable);
