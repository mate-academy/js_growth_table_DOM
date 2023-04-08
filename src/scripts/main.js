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

function lengthOfRows() {
  return document.querySelectorAll('tr')[0].cells.length;
}

function addRowTable(e) {
  const target = e.target;
  const rowLength = lengthOfRows();
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

  if (newRowCount < 10) {
    addRow.disabled = false;
  } else if (newRowCount >= 10) {
    addRow.disabled = true;
  }

  if (newRowCount <= 2) {
    removeRow.disabled = true;
  } else if (newRowCount > 2) {
    removeRow.disabled = false;
  }

  const newLengthOfRows = lengthOfRows();

  if (newLengthOfRows >= 10) {
    addColumn.disabled = true;
  } else if (newLengthOfRows < 10) {
    addColumn.disabled = false;
  }

  if (newLengthOfRows <= 2) {
    removeColumn.disabled = true;
  } else if (newLengthOfRows > 2) {
    removeColumn.disabled = false;
  }
}

container.addEventListener('click', addRowTable);
