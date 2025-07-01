'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function getRows() {
  return Array.from(table.querySelectorAll('tr'));
}

function getColumnCount() {
  const rows = getRows();

  return rows[0]?.children.length || 0;
}

function updateButtonsStates() {
  const rows = getRows();
  const rowsCount = rows.length;
  const columnCount = getColumnCount();

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  const rows = getRows();

  if (rows.length < 10) {
    const newRow = document.createElement('tr');
    const columnCount = getColumnCount();

    for (let i = 0; i < columnCount; i++) {
      const td = document.createElement('td');

      newRow.appendChild(td);
    }
    tbody.appendChild(newRow);
  }

  updateButtonsStates();
});

removeRow.addEventListener('click', () => {
  const rows = getRows();

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  updateButtonsStates();
});

appendColumn.addEventListener('click', () => {
  const rows = getRows();
  const columnCount = getColumnCount();

  if (columnCount < 10) {
    rows.forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
  }

  updateButtonsStates();
});

removeColumn.addEventListener('click', () => {
  const columnCount = getColumnCount();

  if (columnCount > 2) {
    getRows().forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
  }

  updateButtonsStates();
});
