'use strict';

const appendRow = document.querySelector('.append-row');

appendRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tbody tr');

  if (rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');
  const firstRow = document.querySelector('tbody tr');
  const cells = firstRow.querySelectorAll('td');

  for (let i = 0; i < cells.length; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  const tbody = document.querySelector('tbody');

  tbody.append(newRow);

  const rowsAfter = document.querySelectorAll('tbody tr');

  if (rowsAfter.length === 10) {
    appendRow.disabled = true;
  }

  if (rowsAfter.length < 10) {
    appendRow.disabled = false;
  }
});

const removeRow = document.querySelector('.remove-row');

removeRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tbody tr');

  if (rows.length <= 2) {
    return;
  }

  const lastRow = rows[rows.length - 1];

  lastRow.remove();

  const rowsAfter = document.querySelectorAll('tbody tr');

  if (rowsAfter.length <= 2) {
    removeRow.disabled = true;
  }

  if (rowsAfter.length > 2) {
    removeRow.disabled = false;
  }

  if (rowsAfter.length < 10) {
    appendRow.disabled = false;
  }
});

const appendColumn = document.querySelector('.append-column');

appendColumn.addEventListener('click', () => {
  const firstRow = document.querySelector('tbody tr');
  const cells = firstRow.querySelectorAll('td');

  if (cells.length >= 10) {
    return;
  }

  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  const firstRowAfter = document.querySelector('tbody tr');
  const cellsAfter = firstRowAfter.querySelectorAll('td');

  if (cellsAfter.length === 10) {
    appendColumn.disabled = true;
  }

  if (cellsAfter.length < 10) {
    appendColumn.disabled = false;
  }
});

const removeColumn = document.querySelector('.remove-column');

removeColumn.addEventListener('click', () => {
  const firstRow = document.querySelector('tbody tr');
  const cells = firstRow.querySelectorAll('td');

  if (cells.length <= 2) {
    return;
  }

  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  const firstRowAfter = document.querySelector('tbody tr');
  const cellsAfter = firstRowAfter.querySelectorAll('td');

  if (cellsAfter.length <= 2) {
    removeColumn.disabled = true;
  }

  if (cellsAfter.length > 2) {
    removeColumn.disabled = false;
  }

  if (cellsAfter.length < 10) {
    appendColumn.disabled = false;
  }
});
