'use strict';

// write code here
const field = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

function buttonState() {
  const rows = field.querySelectorAll('tr');
  const rowCount = rows.length;
  const columns = rows[0].querySelectorAll('td');
  const columnCount = columns.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const rows = field.querySelectorAll('tr');
  const row = field.querySelector('tr');
  const rowCells = row.querySelectorAll('td');

  if (rows.length < 10) {
    rowCells.forEach(() => {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    });

    field.appendChild(newRow);
  }

  buttonState();
});

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columnCount = rows[0].querySelectorAll('td').length;

  if (columnCount < 10) {
    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }

  buttonState();
});

removeRow.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  if (rows.length > 2) {
    field.removeChild(field.lastElementChild);
  }

  buttonState();
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const rowSize = rows[0].querySelectorAll('td').length;

  if (rowSize > 2) {
    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
  }

  buttonState();
});
