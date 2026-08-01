'use strict';

const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const removeRowButton = document.querySelector('.remove-row');

const tbody = document.querySelector('tbody');

const MIN = 2;
const MAX = 10;

function getRowCount() {
  const countedRows = tbody.querySelectorAll('tr');

  return countedRows.length;
}

function getColumnCount() {
  const rowCell = tbody.querySelector('tr');
  const countedColumns = rowCell.children.length;

  return countedColumns;
}

function updateButtonsStates() {
  appendRowButton.disabled = getRowCount() >= MAX;
  removeRowButton.disabled = getRowCount() <= MIN;
  appendColumnButton.disabled = getColumnCount() >= MAX;
  removeColumnButton.disabled = getColumnCount() <= MIN;
}

appendRowButton.addEventListener('click', () => {
  if (getRowCount() >= MAX) {
    return;
  }

  const row = document.createElement('tr');
  const columnCount = getColumnCount();

  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  tbody.appendChild(row);
  updateButtonsStates();
});

removeRowButton.addEventListener('click', () => {
  if (getRowCount() <= MIN) {
    return;
  }

  const lastRow = tbody.querySelector('tr:last-child');

  tbody.removeChild(lastRow);
  updateButtonsStates();
});

appendColumnButton.addEventListener('click', () => {
  if (getColumnCount() >= MAX) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });

  updateButtonsStates();
});

removeColumnButton.addEventListener('click', () => {
  if (getColumnCount() <= MIN) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastCell = row.querySelector('td:last-child');

    row.removeChild(lastCell);
  });

  updateButtonsStates();
});

updateButtonsStates();
